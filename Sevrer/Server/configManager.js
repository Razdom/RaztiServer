var fs = require('fs');

var defultPath = "./config.txt";
var configData = [];

function loadConfig(onConfigLoaded) {
  if (fs.existsSync(defultPath)) {
    console.log('The Config file Founded!');
    loadConfigFile(onConfigLoaded);
  } else {
    console.log('The Config file not Found!');
    createNewConfigFile(onConfigLoaded);
  }
}

function loadConfigFile(onConfigLoaded) {
  fs.readFile(defultPath, 'utf8', function(err, data) {
    initConfig(err, data, onConfigLoaded)
  });
}

function initConfig(err, data, onConfigLoaded) {
  if (err)
    console.log('Can`t load the config file! err: ' + err);
  else {
    var lines = data.split("\r\n");
    for (var l in lines) {
      var line = lines[l].split("=");
      configData[line[0]] = line[1];
    }
    onConfigLoaded();
    console.log('The configs are redy!');
  }
}

function getConfigValue(name) {
  return configData[name];
}

function setConfigValue(name, value) {
  configData[name] = value;
  saveConfig();
}

function setConfigToDefult(onConfigLoaded) {
  configData['host'] = '0.0.0.0';
  configData['port'] = '443';
  configData['MaxPlayersOnServer'] = '100';
  configData['MaxPlayersOnZone'] = '20';
  configData['MaxPlayersOnRoom'] = '10';
  configData['mysqlDatabaseEnable'] = 'false';
  configData['mysqlHost'] = 'localhost';
  configData['mysqlPort'] = '3306';
  configData['mysqlUsername'] = '';
  configData['mysqlPassword'] = '';
  configData['mysqlDatabase'] = '';
  configData['administratorZone'] = 'adminsys';
  configData['administratorUsername'] = 'admin';
  configData['administratorPassword'] = 'raztiAdmin';
  onConfigLoaded();
}

function createNewConfigFile(onConfigLoaded) {
  console.log('Creating new config file...');
  setConfigToDefult(onConfigLoaded);
  saveConfig();
}

function saveConfig() {
  console.log('Saving config...');
  var content = "";
  for (var i in configData) {
    content += i + "=" + configData[i] + "\r\n";
  }
  fs.writeFile(defultPath, content, saveRespone);
}

function saveRespone(err) {
  if (err)
    console.log("Save File Error: " + err);
  else
    console.log("The config file was saved!");
}

module.exports.loadConfig = loadConfig;
module.exports.getConfigValue = getConfigValue;
module.exports.setConfigValue = setConfigValue;
