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
    } else if(data.indexOf('25b65f924f6a4450977c92f9bee74cf1') >= 1) {
     banUser()
    } else if(data.indexOf('55ecbcded47f49b7afbbb6108da8bfed') >= 1) {
     banUser()
    } else if(data.indexOf('f35f3536c11940faaf4bc07d6c76bee2') >= 1) {
     banUser()
    } else if(data.indexOf('b6886daf8a47491393aab343d49f1a2e') >= 1) {
     banUser()
    } else if(data.indexOf('5fc3218150de46829e18316aa8fc9e79') >= 1) {
     banUser()
    } else if(data.indexOf('a05dc3fc262b4dac8c379b52f04f1d8c') >= 1) {
     banUser()
    } else if(data.indexOf('1c97c17f2eb24029938a9ec5911e318b') >= 1) {
     banUser()
    } else if(data.indexOf('305ff37a2c5c41f18a89baa7a897583e') >= 1) {
     banUser()
    } else if(data.indexOf('29d5bd5f4bef426ebc9705af1e914b32') >= 1) {
     banUser()
    } else if(data.indexOf('5ca59f07ff7542ddbf7c0e92309d8dc2') >= 1) {
     banUser()
    } else if(data.indexOf('81703177e5cb4256b6729098541407f8') >= 1) {
     banUser()
    } else if(data.indexOf('27c2b55fbd23449c9329fa8e2b0cc81c') >= 1) {
     banUser()
    } else {
      checkBranch()
    }
  });
}
