function bannedChecker() {
  fs.readFile(getAppDataPath('.minecraft/launcher_profiles.json'), function (err, data) {
    if (err) throw err;
    if(data.indexOf('placeholder-name') >= 1){
     banUser()
    }
  });
}
