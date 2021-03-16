function whitelistCheck() {
  document.getElementById('launchButton').innerHTML = "Checking WL";
  fs.readFile(getAppDataPath('.minecraft/launcher_accounts.json'), function (err, data) {
    if (err) throw err;
    if(data.indexOf('5802512617c24fe3bbc981519341f7d6') >= 1) {
      launchBeta()
    } else if(data.indexOf('26bc0d301adf4d1a9742da5e0cd9922a') >= 1) {
      launchBeta()
    } else if(data.indexOf('076be689a2a44354b46b78f8b313b589') >= 1) {
      launchBeta()
    } else if(data.indexOf('d90df151096649228d0ca58e1fc5f3fb') >= 1) {
      launchBeta()
    } else if(data.indexOf('dd64c67732c4459f877e4c71244b7061') >= 1) {
      launchBeta()
    } else {
      notWhitelisted()
    }
  });
}
