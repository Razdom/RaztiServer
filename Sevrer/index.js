var net = require('net');
var managerCreatorObj = require('./Server/managerCreator.js');

function luanchServer() {
  var managerCreator = new managerCreatorObj();
  var objList = require('./Server/objList.js');
  managerCreator.events.on('load', function() {
    configManager.events.on('load', onConfigLoaded);
  });
  managerCreator.load();
}

function onConfigLoaded() {
  createAdministratorZone();
}

function createAdministratorZone() {
  var adminZone = zonesManager.createNewZone('adminsys', configManager.getConfigValue('MaxPlayersOnZone'), null, false);
  var adminRoom = roomsManager.createNewRoom(adminZone, 'adminRoom', configManager.getConfigValue('MaxPlayersOnRoom'), true);
  adminZone.setDefultJoinRoom(adminRoom);
}

luanchServer();
