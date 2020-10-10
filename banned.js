function bannedChecker() {
  fs.readFile(getAppDataPath(".minecraft/launcher_profiles.json"), function (err, data) {
    if (err) throw err;
    if(data.indexOf('5802512617c24fe3bbc981519341f7d6') >= 1){
     banUser()
    }
  });
  fs.readFile(getAppDataPath(".minecraft/launcher_profiles.json"), function (err, data) {
    if (err) throw err;
    if(data.indexOf('c926189309c846d3afe4e3cdf49f0bfc') >= 1){
     banUser()
    }
  });
  fs.readFile(getAppDataPath(".minecraft/launcher_profiles.json"), function (err, data) {
    if (err) throw err;
    if(data.indexOf('d7ee5ef9113c4205bbec1a930d95476b') >= 1){
     banUser()
    }
  });
  fs.readFile(getAppDataPath(".minecraft/launcher_profiles.json"), function (err, data) {
    if (err) throw err;
    if(data.indexOf('20ae20f6fd01402f8875ccdd23882920') >= 1){
     banUser()
    }
  });
  fs.readFile(getAppDataPath(".minecraft/launcher_profiles.json"), function (err, data) {
    if (err) throw err;
    if(data.indexOf('fb5afcb3c89e48f99f12df4dff265185') >= 1){
     banUser()
    }
  });
  fs.readFile(getAppDataPath(".minecraft/launcher_profiles.json"), function (err, data) {
    if (err) throw err;
    if(data.indexOf('15898d9b06da4d3eb058710ebded9a7a') >= 1){
     banUser()
    }
  });
  fs.readFile(getAppDataPath(".minecraft/launcher_profiles.json"), function (err, data) {
    if (err) throw err;
    if(data.indexOf('ddfd8fed803f48c9a8e488a474bdda19') >= 1){
     banUser()
    }
  });
  fs.readFile(getAppDataPath(".minecraft/launcher_profiles.json"), function (err, data) {
    if (err) throw err;
    if(data.indexOf('200c64a9cdab45debc38a6d38448547f') >= 1){
     banUser()
    }
  });
}
