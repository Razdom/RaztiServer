var id, name, maxPlayers, rooms = [],
  players = [];

function zone(id, name, maxPlayers) {
  this.id = id;
  this.name = name;
  this.maxPlayers = maxPlayers;
}

function addRoom(room) {
  if (room != null)
    rooms.push(room);
}

function removeRoom(room) {
  if (room != null && rooms.indexOf(rooms) > -1)
    rooms.splice(rooms.indexOf(rooms), -1);
}

module.exports = zone;
module.exports.addRoom = addRoom;
module.exports.removeRoom = removeRoom;
