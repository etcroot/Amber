const { Command } = require('klasa');
const fetch = require('node-fetch');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['pokez'],
			description: 'Poke mentioned member.',
			usage: '<user:mention>'
		});
	}

	async run(msg, [user]) {
        if (user.id === msg.author.id) throw `${msg.author} pokes themselves in the eyes.`;
        if (user.id === this.client.user.id) throw 'Stop poking me, BAKA!?';

		const url = await fetch('https://nekos.life/api/v2/img/poke')
			.then(response => response.json())
			.then(body => body.url);
             return msg.sendEmbed(new MessageEmbed()
            .setColor('#363942')
            .setDescription(`${msg.author} pokes ${user} annoyingly.`)
            .setImage(url));
	}

};