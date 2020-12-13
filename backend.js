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
