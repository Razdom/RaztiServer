global.zoneObj = require('./obj/zone.js');
global.roomObj = require('./obj/room.js');
global.playerObj = require('./obj/player.js');

var events = require('events');
var emitter = new events.EventEmitter();
emitter.emit('load');

module.exports = emitter;
