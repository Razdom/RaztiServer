var zones = [];
var lastZoneID = 0;

function zonesMnager() {

}

function createNewZone(name, maxPlayers, defultJoinRoom) {
  var zone = new zoneObj(lastZoneID++, name, maxPlayers, defultJoinRoom);
  zones.push(zone);
  return zone;
}

function getZoneByID(id) {
  for (var z in zone)
    if (zone[z].id == id)
      return zone[z];
  return null;
}

function getZoneByName(name) {
  for (var z in zone)
    if (zone[z].name == name)
      return zone[z];
  return null;
}



module.exports = zonesMnager;
module.exports.createNewZone = createNewZone;
module.exports.getZoneByID = getZoneByID;
module.exports.getZoneByName = getZoneByName;
