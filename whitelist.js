function whitelistCheck() {
  fs.readFile(getAppDataPath('.minecraft/launcher_profiles.json'), function (err, data) {
    if (err) throw err;
    if(data.indexOf('12e0d63d9e5049a9b5fe4229fba667f2') >= 1) {
     launchClient()
    } else if(data.indexOf('5802512617c24fe3bbc981519341f7d6') >= 1) {
      launchClient()
    } else if(data.indexOf('58ab512473da43a49d231e1fb63be804') >= 1) {
      launchClient()
    } else if(data.indexOf('285c25e374f647e081a64e74ceb54ed3') >= 1) {
      launchClient()
    } else if(data.indexOf('3d825cdb9f3c4460970d526331e0e95d') >= 1) {
      launchClient()
    } else if(data.indexOf('0224d56f630c4b7da4b96294079fb411') >= 1) {
      launchClient()
    } else if(data.indexOf('2b012bf230ed4d8c91f9bf173a781579') >= 1) {
      launchClient()
    } else if(data.indexOf('ca624816b6a6403e9c48455077baa272') >= 1) {
      launchClient()
    } else if(data.indexOf('1f3411180b1f47539fb60d04ba46256d') >= 1) {
      launchClient()
    } else if(data.indexOf('5656c55ed9544b4daacdf188d01720a2') >= 1) {
      launchClient()
    } else if(data.indexOf('48b105e5fc9647298813dd7649b0fbfe') >= 1) {
      launchClient()
    } else if(data.indexOf('48b28f483f474b8aae650e522b456842') >= 1) {
      launchClient()
    } else if(data.indexOf('bf79dda405b5407bb1e81bba7fc2889e') >= 1) {
      launchClient()
    } else {
      notWhitelisted()
    }
  });
}
