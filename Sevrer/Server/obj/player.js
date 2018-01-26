function player(id, name, socket, isAdministrator) {
  this.id = id;
  this.name = name;
  this.socket = socket;
  this.isAdministrator = isAdministrator;
}

module.exports = player;
