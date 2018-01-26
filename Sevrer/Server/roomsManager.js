var rooms = [];
var lastID = 0;

function roomsManager(){

}

function createNewRoom(zone, name, maxPlayers, canJoin) {
  var room = new roomObj(lastID++, name, zone, maxPlayers, canJoin);
  zone.addRoom(room);
  rooms.push(room);
  return room;
}

function getRooms() {
  return rooms;
}

function getRoomByID(id) {
  for (var r in rooms)
    if (rooms[r].id == id)
      return rooms[r];
  return null;
}

function getRoomByName(name) {
  for (var r in rooms)
    if (rooms[r].name == name)
      return rooms[r];
  return null;
}

function removeRoom(room) {
  if (room != null && rooms.indexOf(room) > -1)
    rooms.splice(rooms.indexOf(room), 1);
  room.zone.removeRoom(room);
}

module.exports = roomsManager;
roomsManager.prototype.createNewRoom = createNewRoom;
roomsManager.prototype.getRooms = getRooms;
roomsManager.prototype.getRoomByID = getRoomByID;
roomsManager.prototype.getRoomByName = getRoomByName;
roomsManager.prototype.removeRoom = removeRoom;
