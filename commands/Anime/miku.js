const { Command } = require('klasa');
const fetch = require('node-fetch');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['miku'],
			description: 'Grabs a random Miku wallpaper from derpyenterprises.org'
		});
	}

	async run(msg) {
		const url = await fetch('https://api.derpyenterprises.org/miku')
			.then(response => response.json())
			.then(body => body.url);
			return msg.sendEmbed(new MessageEmbed()
            .setColor('#363942')
            .setImage(url));
	}

};