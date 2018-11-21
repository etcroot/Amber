const { Command } = require('klasa');
const fetch = require('node-fetch');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['kizz'],
			description: 'Kiss mentioned member.',
			usage: '<user:mention>'
		});
	}

	async run(msg, [user]) {
        if (user.id === msg.author.id) throw `${msg.author} kisses themselves, how sad...`;
        if (user.id === this.client.user.id) throw 'Awww, *kisses*';

		const url = await fetch('https://nekos.life/api/v2/img/kiss')
			.then(response => response.json())
			.then(body => body.url);
             return msg.sendEmbed(new MessageEmbed()
            .setColor('#363942')
            .setDescription(`${msg.author} gives ${user} a big kiss =^.^=`)
            .setImage(url));
	}

};