const { Command, Timestamp } = require("klasa");
const { capitalize } = require("../../utils/utils.js");
const { MessageEmbed } = require("discord.js");

class Perms extends Command {
  constructor(...args) {
    super(...args, {
      description: "Check your own or a members permissions.",
      permissionLevel: 5,
      usage: "[Member:membername]",
      runIn: ["text"]
    });
    
        this.perms = {
            MANAGE_GUILD: "Manage Server",
            VIEW_CHANNEL: "Read Text Channels and See Voice Channels",
            USE_VAD: "Use Voice Activity"
          };
  }
  
  async run(msg, [member = msg.member]) {
    const allPermissions = Object.entries(member.permissions.serialize()).filter(perm => perm[1]).map(([perm]) => this.perms[perm] ? this.perms[perm] : capitalize(perm)).join("\n");
     
    const embed = new MessageEmbed()
      .setColor("#36393F")
      .addField("❯ " + member.user.username + "'s Permissions", allPermissions);
    return msg.send({ embed });
  }
}

module.exports = Perms;
