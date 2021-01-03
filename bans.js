function bannedCheck() {
  fs.readFile(getAppDataPath('.minecraft/launcher_accounts.json'), function (err, data) {
    if (err) throw err;
    if(data.indexOf('5ca59f07ff7542ddbf7c0e92309d8dc2') >= 1) {
     banUser()
    } else if(data.indexOf('4fb9e313df1a41c6929ca3c066869e01') >= 1) {
     banUser()
    } else if(data.indexOf('c01ee440a8084d69b700635842e9bdc6') >= 1) {
     banUser()
    } else if(data.indexOf('81703177e5cb4256b6729098541407f8') >= 1) {
     banUser()
    } else if(data.indexOf('48e97601590d48b985afd1382f340bde') >= 1) {
     banUser()
    } else if(data.indexOf('28ce1b86c04a40b082f4640c919889b7') >= 1) {
     banUser()
    } else if(data.indexOf('27c2b55fbd23449c9329fa8e2b0cc81c') >= 1) {
     banUser()
    } else if(data.indexOf('d7ee5ef9113c4205bbec1a930d95476b') >= 1) {
     banUser()
    } else if(data.indexOf('c926189309c846d3afe4e3cdf49f0bfc') >= 1) {
     banUser()
    } else if(data.indexOf('d90df151096649228d0ca58e1fc5f3fb') >= 1) {
     banUser()
    } else {
      checkBranch()
    }
  });
}
