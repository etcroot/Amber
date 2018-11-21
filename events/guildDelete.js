const { Event } = require("klasa");
const { MessageEmbed } = require("discord.js");

class GuildDelete extends Event {

  run(guild) {
    if(!guild.available) return;
    
    if (!this.client.settings.preserveSettings) guild.settings.destroy().catch(() => null);
    guild.members.forEach((x) => x.settings.destroy().catch(() => null));
    
    const channel = this.client.channels.get("513347381576728579");
    const embed = new MessageEmbed()
      .setTitle("Amber left a server.")
      .setDescription(guild.name)
      .setColor(0xff0000)
      .addField("Owner", guild.owner.user.tag)
      .addField("Member Count", guild.memberCount)
      .setFooter(guild.id);
    channel.send({ embed });
    this.client.user.setActivity(`@Amber help | ${this.client.guilds.size} servers`);
  }
}

module.exports = GuildDelete;
