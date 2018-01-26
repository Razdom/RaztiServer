var zones = [];
var lastID = 0;

function createNewZone(name, maxPlayers, defultJoinRoom, canJoin) {
  var zone = new zoneObj(lastID++, name, maxPlayers, defultJoinRoom, canJoin);
  zones.push(zone);
  return zone;
}

function getZones() {
  return zones;
}

function getZoneByID(id) {
  for (var z in zones)
    if (zones[z].id == id)
      return zones[z];
  return null;
}

function getZoneByName(name) {
  for (var z in zones)
    if (zones[z].name == name)
      return zones[z];
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
module.exports.removeZone = removeZone;
