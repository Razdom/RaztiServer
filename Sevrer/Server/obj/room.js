function room(id, name, zone, maxPlayers, canJoin) {
  this.id = id;
  this.name = name;
  this.zone = zone;
  this.maxPlayers = maxPlayers;
  this.canJoin = canJoin;
  this.players = [];
}

function addPlayer(player) {
  if (player != null)
    players.push(player);
}

function removePlayer(player) {
  if (player != null && players.indexOf(player) > -1)
    players.splice(players.indexOf(player), -1);
}

module.exports = room;
zone.prototype.addPlayer = addPlayer;
zone.prototype.removePlayer = removePlay;
