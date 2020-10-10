function bannedChecker() {
  fs.readFile(getAppDataPath('.minecraft/launcher_profiles.json'), function (err, data) {
    if (err) throw err;
    if(data.indexOf('PLAYER-NAME-1') >= 1){
     banUser()
    } else {
      console.log("[ACP]: User passed banned check.");
    }
  });
}
