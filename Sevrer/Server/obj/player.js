function player(id, username, zone, isAdministrator) {
  this.id = id;
  this.name = name;
  this.zone = zone;
  this.isAdministrator = isAdministrator;
  this.rooms = [];
  this.players = [];
}

function addToRoom(room) {
  rooms.push(room);
  room.addPlayer(this);
}

function removeFromRoom(room) {
  rooms.splice(rooms.indexOf(room), -1);
  room.removePlayer(this);
}

module.exports = player;
player.prototype.addToRoom = addToRoom;
player.prototype.removePlayer = removePlay;
