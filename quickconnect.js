var clienthash = "a9d0406b457543f28ad820448e1f63de17304c11";

function quickConnectMain0() {
    alert("This server requires 1.8.9, which Aero Client does not currently support.");
    showLauncher();
}

function quickConnectMain1() {

    if (!(fs.existsSync(getAppDataPath('.minecraft/versions/AeroClient-1.7.10/AeroClient-1.7.10.patch')))) { // If the client doesn't exist it will download the client.
    onlinePopular1();
  }

    var hash = clientPatch.sync(getAppDataPath('.minecraft/versions/AeroClient-1.7.10/AeroClient-1.7.10.patch'));
    console.log("Current Client Hash - " + hash)
    if (hash == clienthash) { // Checks the SHA1 Hash to see if it's outdated or not. (1.7.10)
      offlinePopular1();
    } else {
        onlinePopular1(); // If the SHA1 Hash is different then it will download the client.
    }

}

function quickConnectMain2() {

    if (!(fs.existsSync(getAppDataPath('.minecraft/versions/AeroClient-1.7.10/AeroClient-1.7.10.patch')))) { // If the client doesn't exist it will download the client.
    onlinePartner1();
  }

    var hash = clientPatch.sync(getAppDataPath('.minecraft/versions/AeroClient-1.7.10/AeroClient-1.7.10.patch'));
    console.log("Current Client Hash - " + hash)
    if (hash == clienthash) { // Checks the SHA1 Hash to see if it's outdated or not. (1.7.10)
        offlinePartner1();
    } else {
        onlinePartner1(); // If the SHA1 Hash is different then it will download the client.
    }

}



function quickConnectMain3() {

    if (!(fs.existsSync(getAppDataPath('.minecraft/versions/AeroClient-1.7.10/AeroClient-1.7.10.patch')))) { // If the client doesn't exist it will download the client.
    onlinePartner2();
  }

    var hash = clientPatch.sync(getAppDataPath('.minecraft/versions/AeroClient-1.7.10/AeroClient-1.7.10.patch'));
    console.log("Current Client Hash - " + hash)
    if (hash == clienthash) { // Checks the SHA1 Hash to see if it's outdated or not. (1.7.10)
        offlinePartner2();
    } else {
        onlinePartner2(); // If the SHA1 Hash is different then it will download the client.
    }

}

async function onlinePopular1() {
    document.getElementById('launchButton').innerHTML = "Updating Patch"
    document.querySelector('.launch-button').className += " clicked";
  
    console.log("[Aero Client] Launching Stable Branch");
    client.launch({ 
      authorization: Authenticator.getAuth("User"),
      clientPackage: "https://clientupdate.aeroclient.net",
      removePackage: "clientPackage.zip",
      root: getAppDataPath(".minecraft"),
      javaPath: getAppDataPath("aeroclient/jre/bin/java.exe"),
      server: {
        host: "play.vipermc.net",
        port: "25565"
      },
      version: {
        number: "1.7.10",
        custom: "AeroClient-1.7.10"
      },
      memory: {
          max: document.getElementById("ramslider").value,
          min: "1024"
      },
      overrides: {
        minecraftJar: getAppDataPath(".minecraft/versions/AeroClient-1.7.10/AeroClient-1.7.10.patch"),
      }
  }).catch(e => {
      console.log(e.message);
      launchError();
  })
  }
  
  async function onlinePartner1() {
    document.getElementById('launchButton').innerHTML = "Updating Patch"
    document.querySelector('.launch-button').className += " clicked";
  
    console.log("[Aero Client] Launching Stable Branch");
    client.launch({ 
      authorization: Authenticator.getAuth("User"),
      clientPackage: "https://clientupdate.aeroclient.net",
      removePackage: "clientPackage.zip",
      root: getAppDataPath(".minecraft"),
      javaPath: getAppDataPath("aeroclient/jre/bin/java.exe"),
      server: {
        host: "play.coldnetwork.net",
        port: "25565"
      },
      version: {
        number: "1.7.10",
        custom: "AeroClient-1.7.10"
      },
      memory: {
          max: document.getElementById("ramslider").value,
          min: "1024"
      },
      overrides: {
        minecraftJar: getAppDataPath(".minecraft/versions/AeroClient-1.7.10/AeroClient-1.7.10.patch"),
      }
  }).catch(e => {
      console.log(e.message);
      launchError();
  })
  }
  
  async function onlinePartner2() {
    document.getElementById('launchButton').innerHTML = "Updating Patch"
    document.querySelector('.launch-button').className += " clicked";
  
    console.log("[Aero Client] Launching Stable Branch");
    client.launch({ 
      authorization: Authenticator.getAuth("User"),
      clientPackage: "https://clientupdate.aeroclient.net",
      removePackage: "clientPackage.zip",
      root: getAppDataPath(".minecraft"),
      javaPath: getAppDataPath("aeroclient/jre/bin/java.exe"),
      server: {
        host: "certix.cc",
        port: "25565"
      },
      version: {
        number: "1.7.10",
        custom: "AeroClient-1.7.10"
      },
      memory: {
          max: document.getElementById("ramslider").value,
          min: "1024"
      },
      overrides: {
        minecraftJar: getAppDataPath(".minecraft/versions/AeroClient-1.7.10/AeroClient-1.7.10.patch"),
      }
  }).catch(e => {
      console.log(e.message);
      launchError();
  })
  }

  async function offlinePopular1() {
    document.getElementById('launchButton').innerHTML = "Starting JVM"
    document.querySelector('.launch-button').className += " clicked"
  
    console.log("[Aero Client] Launching Stable Branch");
    client.launch({ 
      authorization: Authenticator.getAuth("User"),
      root: getAppDataPath(".minecraft"),
      javaPath: getAppDataPath("aeroclient/jre/bin/java.exe"),
      server: {
        host: "play.vipermc.net",
        port: "25565"
      },
      version: {
        number: "1.7.10",
        custom: "AeroClient-1.7.10"
      },
      memory: {
          max: document.getElementById("ramslider").value,
          min: "1024"
      },
      overrides: {
        minecraftJar: getAppDataPath(".minecraft/versions/AeroClient-1.7.10/AeroClient-1.7.10.patch"),
      }
  }).catch(e => {
      console.log(e.message);
      launchError();
  })
  }
  
  async function offlinePartner1() {
    document.getElementById('launchButton').innerHTML = "Starting JVM"
    document.querySelector('.launch-button').className += " clicked"
  
    console.log("[Aero Client] Launching Stable Branch");
    client.launch({ 
      authorization: Authenticator.getAuth("User"),
      root: getAppDataPath(".minecraft"),
      javaPath: getAppDataPath("aeroclient/jre/bin/java.exe"),
      server: {
        host: "play.coldnetwork.net",
        port: "25565"
      },
      version: {
        number: "1.7.10",
        custom: "AeroClient-1.7.10"
      },
      memory: {
          max: document.getElementById("ramslider").value,
          min: "1024"
      },
      overrides: {
        minecraftJar: getAppDataPath(".minecraft/versions/AeroClient-1.7.10/AeroClient-1.7.10.patch"),
      }
  }).catch(e => {
      console.log(e.message);
      launchError();
  })
  }
  
  async function offlinePartner2() {
    document.getElementById('launchButton').innerHTML = "Starting JVM"
    document.querySelector('.launch-button').className += " clicked"
  
    console.log("[Aero Client] Launching Stable Branch");
    client.launch({ 
      authorization: Authenticator.getAuth("User"),
      root: getAppDataPath(".minecraft"),
      javaPath: getAppDataPath("aeroclient/jre/bin/java.exe"),
      server: {
        host: "certix.cc",
        port: "25565"
      },
      version: {
        number: "1.7.10",
        custom: "AeroClient-1.7.10"
      },
      memory: {
          max: document.getElementById("ramslider").value,
          min: "1024"
      },
      overrides: {
        minecraftJar: getAppDataPath(".minecraft/versions/AeroClient-1.7.10/AeroClient-1.7.10.patch"),
      }
  }).catch(e => {
      console.log(e.message);
      launchError();
  })
  }
