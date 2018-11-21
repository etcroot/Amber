const { Command } = require("klasa");
const { MessageEmbed } = require("discord.js");
const superagent = require("superagent");
const { random } = require("../../utils/utils.js");

class Choker extends Command {
  constructor(...args) {
    super(...args, {
      description: "Get a random chokers from r/choker",
      nsfw: true
    });
  }
  
  async run(msg) {
    const choker = await superagent.get("https://www.reddit.com/r/choker/top.json?sort=latest&t=year&limit=500")
      .then((res) => {
        const data = random(res.body.data.children).data;
        return {
          title: data.title,
          url: data.url,
          votes: data.ups,
          downvotes: data.downs
        };
      }).catch(() => null);
      const voted = await this.client.functions.isUpvoted(msg.author.id);
		if(!voted) {
			return msg.channel.send('You need to vote for Amber first, you can do that here: <https://discordbots.org/bot/513108102711738377/vote>\nAfter you\'ve voted it might take 1-3 minutes for it to register it.');
		}
    if(!choker) throw "Couldn't get chokers, try again later.";
    
    return  msg.channel.send(`**${choker.title}**\n${choker.url}`);
  }
}

module.exports = Choker;
