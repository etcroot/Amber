const { Command } = require("klasa");
const { MessageEmbed } = require("discord.js");
const superagent = require("superagent");
const { random } = require("../../utils/utils.js");

class Gif extends Command {
  constructor(...args) {
    super(...args, {
      description: "Get a random gif from r/gif",
      aliases: ["gifs"]
    });
  }
  
  async run(message) {
    const gif = await superagent.get("https://www.reddit.com/r/gif/top.json?sort=latest&t=year&limit=500")
      .then((res) => {
        const data = random(res.body.data.children).data;
        return {
          title: data.title,
          url: data.url,
          votes: data.ups,
          downvotes: data.downs
        };
      }).catch(() => null);
      
    if(!gif) throw "Couldn't get gifs, try again later.";
    
    return  message.channel.send(`**${gif.title}**\n${gif.url}`);
  }
}

module.exports = Gif;
