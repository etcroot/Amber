const { Command } = require('klasa');
const fetch = require('node-fetch');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['patz'],
			description: 'Pat mentioned member.',
			usage: '<user:mention>'
		});
	}

	async run(msg, [user]) {
        if (user.id === msg.author.id) throw `${msg.author} pats themselves on the shoulder.`;
        if (user.id === this.client.user.id) throw 'I hate pats.';

		const url = await fetch('https://nekos.life/api/v2/img/pat')
			.then(response => response.json())
			.then(body => body.url);
             return msg.sendEmbed(new MessageEmbed()
            .setColor('#363942')
            .setDescription(`${msg.author} pats ${user} :3`)
            .setImage(url));
	}

};