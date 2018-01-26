var zones = [];
var lastID = 0;

function zonesManager() {
  
}

function createNewZone(name, maxPlayers, defultJoinRoom, canJoin) {
  var zone = new zoneObj(lastID++, name, maxPlayers, defultJoinRoom, canJoin);
  zones.push(zone);
  console.log('[zonesManager] New Zone \'' + zone.name + '\' Created! (id: ' + zone.id + ')');
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



module.exports = zonesManager;
zonesManager.prototype.createNewZone = createNewZone;
zonesManager.prototype.getZoneByID = getZoneByID;
zonesManager.prototype.getZoneByName = getZoneByName;
zonesManager.prototype.removeZone = removeZone;
