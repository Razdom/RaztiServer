function zone(id, name, maxPlayers, canJoin) {
  this.id = id;
  this.name = name;
  this.maxPlayers = maxPlayers;
  this.defultJoinRoom = null;
  this.canJoin = canJoin;
  this.rooms = [];
}

function addRoom(room) {
  if (room != null)
    this.rooms.push(room);
}

function removeRoom(room) {
  if (room != null && this.rooms.indexOf(rooms) > -1)
    this.rooms.splice(this.rooms.indexOf(rooms), -1);
}

function setDefultJoinRoom(room) {
  if (room != null && this.rooms.indexOf(room) > -1)
    this.defultJoinRoom = room;
}

module.exports = zone;
zone.prototype.addRoom = addRoom;
zone.prototype.removeRoom = removeRoom;
zone.prototype.setDefultJoinRoom = setDefultJoinRoom;
