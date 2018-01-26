var events = require('events');
var emitter = new events.EventEmitter();


function managerCreator() {
}

function load() {
  var configManager = require('./configManager.js');
  global.configManager = new configManager();
  var zonesManager = require('./zonesManager.js');
  global.zonesManager = new zonesManager();
  var roomsManager = require('./roomsManager.js');
  global.roomsManager = new roomsManager();
  var playersManager = require('./playersManager.js');
  global.playersManager = new playersManager();
  emitter.emit('load');
}

module.exports = managerCreator;
managerCreator.prototype.events = emitter;
managerCreator.prototype.load = load;
