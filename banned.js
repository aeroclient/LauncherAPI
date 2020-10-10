function bannedChecker() {
  fs.readFile(getAppDataPath(".minecraft/launcher_profiles.json"), function (err, data) {
  if (err) throw err;if(data.indexOf('rbuh') >= 1){banUser()}});
  
  fs.readFile(getAppDataPath(".minecraft/launcher_profiles.json"), function (err, data) {
  if (err) throw err;if(data.indexOf('Preliable') >= 1){banUser()}});
}
