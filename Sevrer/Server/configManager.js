var fs = require('fs');

var defultPath = "./config.txt";
var configData = [];

function ConfigManager() {
  console.log('ConfigManager Enabled!');
  loadConfig();
}

function loadConfig() {
  if (fs.existsSync(defultPath)) {
    console.log('The Config file Founded!');
    loadConfigFile();
  } else {
    console.log('The Config file not Found!');
    createNewConfigFile();
  }
}

function loadConfigFile() {
  fs.readFile(defultPath, 'utf8', initConfig);
}

function initConfig(err, data) {
  if (err)
    console.log('Can`t load the config file! err: '+err);
  else {
    var lines = data.split("\r\n");
    for (var l in lines) {
      var line = lines[l].split("=");
      configData[line[0]] = line[1];
    }
    console.log('The configs are redy!');
  }
}

function getConfigValue(name) {
  return configData[name];
}

function setConfigToDefult() {
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
}

function createNewConfigFile() {
  console.log('Creating new config file...');
  setConfigToDefult();
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

module.exports = ConfigManager;
module.exports.getConfigValue = getConfigValue;
