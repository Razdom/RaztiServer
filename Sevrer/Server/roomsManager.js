var rooms = [];
var lastID = 0;

function createNewRoom(name, maxPlayers, canJoin) {
  var room = new room(lastID++, name, maxPlayers, canJoin);
  rooms.push(room);
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
}

module.exports.getRooms = getRooms;
module.exports.createNewRoom = createNewRoom;
module.exports.getRoomByID = getRoomByID;
module.exports.getRoomByName = getRoomByName;
module.exports.removeRoom = removeRoom;
