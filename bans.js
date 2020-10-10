function bannedChecker() {
  fs.readFile(getAppDataPath('.minecraft/launcher_profiles.json'), function (err, data) {
    if (err) throw err;
    if(data.indexOf('PLAYER-NAME-1') >= 1){
     banUser()
    }
  });
}
