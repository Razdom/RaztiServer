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
    this.players.push(player);
}

function removePlayer(player) {
  if (player != null && this.players.indexOf(player) > -1)
    this.players.splice(this.players.indexOf(player), -1);
}

module.exports = room;
room.prototype.addPlayer = addPlayer;
room.prototype.removePlayer = removePlayer;
