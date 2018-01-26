var fs = require('fs');

var defultPath = "./config.txt";
var configData = [];
var events = require('events');
var emitter = new events.EventEmitter();

function configManager() {
  loadConfig();
}

function loadConfig() {
  if (fs.existsSync(defultPath)) {
    console.log('[configMamager] The Config file Founded!');
    loadConfigFile();
  } else {
    console.log('[configMamager] The Config file not Found!');
    createNewConfigFile();
  }
}

function loadConfigFile() {
  fs.readFile(defultPath, 'utf8', function(err, data) {
    initConfig(err, data);
  });
}

function initConfig(err, data) {
  if (err)
    console.log('[configMamager] Can`t load the config file! err: ' + err);
  else {
    var lines = data.split("\r\n");
    for (var l in lines) {
      var line = lines[l].split("=");
      configData[line[0]] = line[1];
    }
    emitter.emit('load');
    console.log('[configMamager] The configs are ready!');
  }
}

function getConfigValue(name) {
  return configData[name];
}

function setConfigValue(name, value) {
  configData[name] = value;
  saveConfig();
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
  configData['administratorUsername'] = 'admin';
  configData['administratorPassword'] = 'raztiAdmin';
  emitter.emit('load');
}

function createNewConfigFile(onConfigLoaded) {
  console.log('[configMamager] Creating new config file...');
  setConfigToDefult(onConfigLoaded);
  saveConfig();
}

function saveConfig() {
  console.log('[configMamager] Saving config...');
  var content = "";
  for (var i in configData) {
    content += i + "=" + configData[i] + "\r\n";
  }
  fs.writeFile(defultPath, content, saveRespone);
}

function saveRespone(err) {
  if (err)
    console.log("[configMamager] Save File Error: " + err);
  else
    console.log("[configMamager] The config file was saved!");
}

module.exports = configManager;
configManager.prototype.events = emitter;
configManager.prototype.getConfigValue = getConfigValue;
