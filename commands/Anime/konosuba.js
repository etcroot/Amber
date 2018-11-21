const { Command } = require('klasa');
const fetch = require('node-fetch');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['konosuba'],
			description: 'Grabs a random Konosuba gif from derpyenterprises.org'
		});
	}

	async run(msg) {
		const url = await fetch('https://api.derpyenterprises.org/konosuba')
			.then(response => response.json())
			.then(body => body.url);
			return msg.sendEmbed(new MessageEmbed()
            .setColor('#363942')
            .setImage(url));
	}

};