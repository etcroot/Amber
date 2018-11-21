const { Event } = require("klasa");

class KlasaReady extends Event {
  
  run() {
    this.client.user.setActivity(`@Amber help | ${this.client.guilds.size} servers`);
  }
}

module.exports = KlasaReady;
