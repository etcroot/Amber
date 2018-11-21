const { Command } = require('klasa');
const fetch = require('node-fetch');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['nekos'],
			description: 'Grabs a random neko image from nekos.life.'
		});
	}

	async run(msg) {
		const url = await fetch('https://nekos.life/api/v2/img/neko')
			.then(response => response.json())
			.then(body => body.url);
		return msg.channel.sendFile(url);
	}

};