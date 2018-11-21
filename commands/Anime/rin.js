const { Command } = require('klasa');
const fetch = require('node-fetch');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['rin'],
			description: 'Grabs a random Rin image from meek.moe'
		});
	}

	async run(msg) {
		const url = await fetch('https://api.meek.moe/rin')
			.then(response => response.json())
			.then(body => body.url);
			return msg.sendEmbed(new MessageEmbed()
            .setColor('#363942')
            .setImage(url));
	}

};