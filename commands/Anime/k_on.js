const { Command } = require('klasa');
const fetch = require('node-fetch');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['k-on', 'k_on'],
			description: 'Grabs a random K_On gif from derpyenterprises.org'
		});
	}

	async run(msg) {
		const url = await fetch('https://api.derpyenterprises.org/k-on')
			.then(response => response.json())
			.then(body => body.url);
			return msg.sendEmbed(new MessageEmbed()
            .setColor('#363942')
            .setImage(url));
	}

};