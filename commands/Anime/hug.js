const { Command } = require('klasa');
const fetch = require('node-fetch');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['huggie'],
			description: 'Hug mentioned member.',
			usage: '<user:mention>'
		});
	}

	async run(msg, [user]) {
        if (user.id === msg.author.id) throw `${msg.author} hugs themselves, how sad...`;
        if (user.id === this.client.user.id) throw 'Awww, *huggieeeeez*';

		const url = await fetch('https://nekos.life/api/v2/img/hug')
			.then(response => response.json())
			.then(body => body.url);
             return msg.sendEmbed(new MessageEmbed()
            .setColor('#363942')
            .setDescription(`${msg.author} embraces ${user} close to them.`)
            .setImage(url));
	}

};