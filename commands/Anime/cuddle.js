const { Command } = require('klasa');
const fetch = require('node-fetch');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['cuddlez'],
			description: 'Cuddle mentioned member.',
			usage: '<user:mention>'
		});
	}

	async run(msg, [user]) {
        if (user.id === msg.author.id) throw `${msg.author} cuddles themselves, how sad...`;
        if (user.id === this.client.user.id) throw 'Awww, *cuddlezzzzz*';

		const url = await fetch('https://nekos.life/api/v2/img/cuddle')
			.then(response => response.json())
			.then(body => body.url);
             return msg.sendEmbed(new MessageEmbed()
            .setColor('#363942')
            .setDescription(`${msg.author} cuddles up close to ${user}.`)
            .setImage(url));
	}

};