function bannedChecker() {
  fs.readFile(getAppDataPath('.minecraft/launcher_profiles.json'), function (err, data) {
    if (err) throw err;
    if(data.indexOf('ArcaneCC') >= 1){
     banUser()
    }
  });
}
