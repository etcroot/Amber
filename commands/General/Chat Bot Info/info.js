const { Command, version: klasaVersion, Timestamp } = require('klasa');
const { version: discordVersion } = require('discord.js');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
            name: 'info',
			description: 'Get information on the bot.'
		});
		this.timestamp = new Timestamp('d MMMM YYYY');
	}

	run(msg, [bot = this.client.user]) {


		return msg.sendEmbed(new MessageEmbed()
			.setTitle('__Information About Amber__')
			.setDescription('Hiya~ I\'m Amber... I\'ll be your server assistant & multipurpose bot!\nYou can use `a!` to get all my commands or @Amber help')
            .setColor('#363942')
			.setThumbnail(bot.displayAvatarURL())
			.addField('❯ Name', bot.tag, true)
			.addField('❯ ID', bot.id, true)
			.addField('❯ Users', this.client.users.size, true)
			.addField('❯ Guilds', this.client.guilds.size, true)
			.addField('❯ Channels', this.client.channels.size, true)
			.addField('❯ Node', process.version, true)
			.addField('❯ Library', 'Discord.js v' + discordVersion, true)
			.addField('❯ Framework', 'Klasa v' + klasaVersion, true)
			.addField('❯ Owners', '<@484765734803734540>', true)
			.addField('❯ Discord Join Date', this.timestamp.display(bot.createdAt), true)
			.addField('❯ Server Join Date', this.timestamp.display(bot.joinedTimestamp), true)
			.addField('❯ Version', 'v1.2', true)
			.addField('❯ Useful Links', '[Website](https://etcroot.pw/amber/) | [Support Server](https://discord.gg/2UcyFDD) | [Invite](https://discordapp.com/oauth2/authorize?client_id=513108102711738377&permissions=1342205030&scope=bot) | [Vote For Amber](https://discordbots.org/bot/513108102711738377/vote) | [Patreon](https://www.patreon.com/etcroot)', false)
			);
	}

};