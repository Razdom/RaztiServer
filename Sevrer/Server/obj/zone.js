function zone(id, name, maxPlayers, defultJoinRoom, canJoin) {
  this.id = id;
  this.name = name;
  this.maxPlayers = maxPlayers;
  this.defultJoinRoom = defultJoinRoom;
  this.canJoin = canJoin;
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

function setDefultRoom(room) {
  this.defultJoinRoom = room;
}

module.exports = zone;
zone.prototype.addRoom = addRoom;
zone.prototype.removeRoom = removeRoom;
zone.prototype.setDefultRoom = setDefultRoom;
