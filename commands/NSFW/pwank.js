const { Command } = require('klasa');
const fetch = require('node-fetch');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
            description: 'Grabs a random pwank image.',
            nsfw: true
		});
	}

	async run(msg) {
		const voted = await this.client.functions.isUpvoted(msg.author.id);
		if(!voted) {
			return msg.channel.send('You need to vote for Amber first, you can do that here: <https://discordbots.org/bot/513108102711738377/vote>\nAfter you\'ve voted it might take 1-3 minutes for it to register it.');
		}

		const url = await fetch('https://nekos.life/api/v2/img/pwankg')
			.then(response => response.json())
			.then(body => body.url);
            return msg.sendEmbed(new MessageEmbed()
            .setColor('#363942')
            .setImage(url));
	}

};