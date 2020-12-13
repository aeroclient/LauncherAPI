function banUser() {
  document.querySelector('.launch-button').className += " banned";
  document.getElementById('launchButton').innerHTML = "BANNED";
  console.log("[ACP]: ACP_LAUNCH_BANNED");
}

function startupChecks() {
  bannedCheck()
}

function notWhitelisted() {
  document.querySelector('.launch-button').className += " banned";
  document.getElementById('launchButton').innerHTML = "UNAUTHORIZED";
  console.log("[ACP]: Not whitelisted!");
}

function branchDefaultColor() {
  document.querySelector('.branch-button2').style.backgroundColor = "rgba(0, 0, 0, 0.500);";
  console.log("test");
}
