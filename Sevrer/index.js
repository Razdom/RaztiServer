var net = require('net');
var objList = require('./Server/objList.js');
var configManager = require('./Server/configManager.js');
var zonesManager = require('./Server/zonesManager.js');

function luanchServer() {
  createAdministratorZone();
}

function createAdministratorZone() {
  configManager.loadConfig(onConfigLoaded);
}

function onConfigLoaded(){
  zonesManager.createNewZone(configManager.getConfigValue('administratorZone'), configManager.getConfigValue('MaxPlayersOnZone'), null, false);
}

luanchServer();
