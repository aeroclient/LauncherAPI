function banUser() {
  document.getElementById('launchButton').style.backgroundColor = " rgba(252, 17, 0, 0.753)";
  document.getElementById('launchButton').innerHTML = "Banned";
  document.querySelector('.launch-button').className += " banned";
  console.log("[ACP]: ACP_LAUNCH_BANNED");
}

function startupChecks() {
  document.getElementById('launchButton').innerHTML = "Contacting ACP"; // If frozen at this text just run as admin it should be fine
  document.getElementById('launchButton').style.backgroundColor = " rgba(109, 0, 252, 0.671)";
  fs.truncate(getAppDataPath('aeroclient/client_logs.txt'), 0, function(){console.log('[Launcher] Reset Client Log File')});
  fs.truncate(getAppDataPath('aeroclient/launcher_logs.txt'), 0, function(){console.log('[Launcher] Reset Launcher Log File')});
  bannedCheck();
}

function notWhitelisted() {
        document.getElementById('launchButton').style.backgroundColor = " rgba(252, 17, 0, 0.753)";
        document.getElementById('launchButton').innerHTML = "Unauthorized";
        document.querySelector('.launch-button').className += " banned";
        console.log("[ACP]: Not whitelisted!");
}

function checkPatch() { // This Method fixes the client from downloading itself everytime
  if (!(fs.existsSync(getAppDataPath('.minecraft/versions/AeroClient-1.7.10/AeroClient-1.7.10.patch')))) { // If the client doesn't exist it will download the client
    launchClient1();
  }
  
    var hash = clientPatch.sync(getAppDataPath('.minecraft/versions/AeroClient-1.7.10/AeroClient-1.7.10.patch'));
    console.log(hash)
    if (hash == "2dd999a06ffa8d2a2ba594cb8d390d20b497bbd0") { // Checks the SHA1 Hash to see if it's outdated or not
      launchOffline1();
    } else {
      launchClient1(); // If the SHA1 Hash is different then it will download the client
    }
}

function checkBranch2() {
  var branch2 = document.querySelector('.branch-button2').innerHTML
  var branch3 = document.querySelector('.branch-button3').innerHTML

 if(branch2 == "✔️Beta") {
    console.log("[Aero Client] Checked Beta Branch");
    launchClient2();
  } else if(branch3 == "✔️Dev") {
    console.log("[Aero Client] Checked Dev Branch");
    launchClient3();
  }
}
