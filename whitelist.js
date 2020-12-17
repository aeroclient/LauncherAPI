function whitelistCheck() {
  fs.readFile(getAppDataPath('.minecraft/launcher_accounts.json'), function (err, data) {
    if (err) throw err;
    if(data.indexOf('5802512617c24fe3bbc981519341f7d6') >= 1) {
      checkBranch()
    } else if(data.indexOf('12e0d63d9e5049a9b5fe4229fba667f2') >= 1) {
      checkBranch()
    } else if(data.indexOf('285c25e374f647e081a64e74ceb54ed3') >= 1) {
      checkBranch()
    } else if(data.indexOf('007f6d3eb5dc405d9dd7d00d4b4105a6') >= 1) {
      checkBranch()
    } else if(data.indexOf('4e579cb79d8d449181602e4a4f8c84f1') >= 1) {
      checkBranch()
    } else if(data.indexOf('5656c55ed9544b4daacdf188d01720a2') >= 1) {
      checkBranch()
    } else if(data.indexOf('c229f618447a4b8792086a90116302ee') >= 1) {
      checkBranch()
    } else if(data.indexOf('ca624816b6a6403e9c48455077baa272') >= 1) {
      checkBranch()
    } else if(data.indexOf('ab897c5ebefa4ec18ae7a0eae87f3d62') >= 1) {
      checkBranch()
    } else if(data.indexOf('48b28f483f474b8aae650e522b456842') >= 1) {
      checkBranch()
    } else if(data.indexOf('3d825cdb9f3c4460970d526331e0e95d') >= 1) {
      checkBranch()
    } else if(data.indexOf('0224d56f630c4b7da4b96294079fb411') >= 1) {
      checkBranch()
    } else if(data.indexOf('3c1369fbc8b445ffb59178ee977ea992') >= 1) {
      checkBranch()
    } else if(data.indexOf('7d525425e2674baa999472949d361739') >= 1) {
      checkBranch()
    } else if(data.indexOf('48b105e5fc9647298813dd7649b0fbfe') >= 1) {
      checkBranch()
    } else if(data.indexOf('1f3411180b1f47539fb60d04ba46256d') >= 1) {
      checkBranch()
    } else {
      notWhitelisted()
    }
  });
}
