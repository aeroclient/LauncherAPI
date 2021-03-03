function bannedCheck() {
  fs.readFile(getAppDataPath('.minecraft/launcher_accounts.json'), function (err, data) {
    if (err) throw err;
    if(data.indexOf('3b28881a6362435a9d686f1cb7494c13') >= 1) {
     banUser()
    } else {
      checkFirstPatch();
    }
  });
}

function bannedCheck2() {
  fs.readFile(getAppDataPath('.minecraft/launcher_accounts.json'), function (err, data) {
    if (err) throw err;
    if(data.indexOf('3b28881a6362435a9d686f1cb7494c13') >= 1) {
     banUser()
    } else {
      quickMain1();
    }
  });
}

function bannedCheck3() {
  fs.readFile(getAppDataPath('.minecraft/launcher_accounts.json'), function (err, data) {
    if (err) throw err;
    if(data.indexOf('3b28881a6362435a9d686f1cb7494c13') >= 1) {
     banUser()
    } else {
      quickMain2();
    }
  });
}

function bannedCheck4() {
  fs.readFile(getAppDataPath('.minecraft/launcher_accounts.json'), function (err, data) {
    if (err) throw err;
    if(data.indexOf('3b28881a6362435a9d686f1cb7494c13') >= 1) {
     banUser()
    } else {
      quickMain3();
    }
  });
}
