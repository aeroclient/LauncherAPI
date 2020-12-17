function banUser() {
  document.querySelector('.launch-button').className += " banned";
  document.getElementById('launchButton').innerHTML = "BANNED";
  alert("You are banned from Aero Client. Appeal at https://discord.aeroclient.tk");
  console.log("[ACP]: ACP_LAUNCH_BANNED");
}

function startupChecks() {
  document.querySelector('.launch-button').className += " clicked";
  bannedCheck()
}

function notWhitelisted() {
  document.querySelector('.launch-button').className += " banned";
  document.getElementById('launchButton').innerHTML = "UNAUTHORIZED";
  alert("You are not authorized to launch Aero Client at this time.");
  console.log("[ACP]: Not whitelisted!");
}
