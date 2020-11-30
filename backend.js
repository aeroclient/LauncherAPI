function banUser() {
  document.querySelector('.launch-button').className += " banned";
  document.getElementById('launchButton').innerHTML = "BANNED";
  console.log("[ACP]: ACP_LAUNCH_BANNED");
}

function startupChecks() {
  bannedCheck()
}

