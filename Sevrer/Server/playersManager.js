var players = [];
var lastID = 0;

function playersManager(){

}

function createNewPlayer(name, socket, isAdministrator) {
  var player = new playerObj(lastID++, name, socket, isAdministrator);
  players.push(player);
  return player;
}

function getPlayers() {
  return players;
}

function getPlayerByID(id) {
  for (var p in players)
    if (players[p].id == id)
      return players[p];
  return null;
}

function getPlayersByName(name) {
  for (var p in players)
    if (players[p].name == name)
      return players[p];
  return null;
}

function getPlayersBySocket(socket) {
  for (var p in players)
    if (players[p].socket == socket)
      return players[p];
  return null;
}

function removePlayer(player) {
  if (player != null && players.indexOf(player) > -1)
    players.splice(players.indexOf(player), 1);
}

module.exports = playersManager;
playersManager.prototype.createNewPlayer = createNewPlayer;
playersManager.prototype.getPlayers = getPlayers;
playersManager.prototype.getPlayerByID = getPlayerByID;
playersManager.prototype.getPlayersByName = getPlayersByName;
playersManager.prototype.getPlayersBySocket = getPlayersBySocket;
playersManager.prototype.removePlayer = removePlayer;
