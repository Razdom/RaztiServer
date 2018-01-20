function zone(id, name, maxPlayers) {
  this.id = id;
  this.name = name;
  this.maxPlayers = maxPlayers;
  this.rooms = [];
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
zone.prototype.addRoom = addRoom;
zone.prototype.removeRoom = removeRoom;
