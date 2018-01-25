var zones = [];
var lastZoneID = 0;

function createNewZone(name, maxPlayers, defultJoinRoom, canJoin) {
  var zone = new zoneObj(lastZoneID++, name, maxPlayers, defultJoinRoom, canJoin);
  zones.push(zone);
  return zone;
}

function getZones() {
  return zones;
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

function removeZone(zone) {
  if (zone != null && zones.indexOf(zone) > -1)
    zones.splice(zones.indexOf(zone), 1);
}



module.exports.getZones = getZones;
module.exports.createNewZone = createNewZone;
module.exports.getZoneByID = getZoneByID;
module.exports.getZoneByName = getZoneByName;
module.exports.removeZone = getZoneByName;
