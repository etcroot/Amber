const { Command } = require('klasa');
const fetch = require('node-fetch');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['foooood'],
			description: 'Feed mentioned member.',
			usage: '<user:mention>'
		});
	}

	async run(msg, [user]) {
        if (user.id === msg.author.id) throw `${msg.author} shoves their mouth full of food.`;
        if (user.id === this.client.user.id) throw 'Yummy, thanks :3';

		const url = await fetch('https://nekos.life/api/v2/img/feed')
			.then(response => response.json())
			.then(body => body.url);
             return msg.sendEmbed(new MessageEmbed()
            .setColor('#363942')
            .setDescription(`${msg.author} feeds ${user} some delicious food.`)
            .setImage(url));
	}

};