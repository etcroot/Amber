const { LadybugFunction } = require("../structures");
const ladybug = require("ladybug-fetch");
const config = require('../config.json');

class IsUpvoted extends LadybugFunction {

  constructor(...args) {
    super(...args, {
      aliases: ["upvoteCheck", "checkUpvote"]
    });
  }

  run(userId) {
    // Allow passing a User or Message
    if(userId.id) userId = userId.id;
    if(userId.author) userId = userId.author.id;
    return ladybug(`https://discordbots.org/api/bots/${this.client.user.id}/check`)
      .set("Authorization", config.dbl)
      .query({ userId })
      .then((res) => Boolean(res.body.voted))
      .catch(() => false);
  }
}

module.exports = IsUpvoted;
