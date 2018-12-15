const { Client } = require("klasa");
const { defaultGuildSchema, defaultClientSchema, defaultUserSchema, defaultMemberSchema } = require("./utils/Schema.js");
const perms = require("./utils/permissionLevels.js");
const Constants = require("./utils/Constants.js");
const { RawEventStore, FunctionStore } = require("./stores");
const { config, token, prefix, owner } = require("./config.json");
const dbl = require("dblposter");

class AmberClient extends Client {
  constructor() {
    super({
      fetchAllMembers: false,
      disabledEvents: ["TYPING_START", "CHANNEL_PINS_UPDATE"],
      permissionLevels: perms,
      prefix: prefix,
      commandEditing: true,
      pieceDefaults: {
        commands: { deletable: true, quotedStringSupport: true },
        rawEvents: { enabled: true },
        functions: { enabled: true }
      },
      typing: false,
      ownerID: owner,
      readyMessage: (client) => `Successfully initialized. Logged in as ${client.user.tag} (${client.user.id}), Ready to serve ${client.users.size} users in ${client.guilds.size} guilds with ${client.channels.size} channels!`,
      prefixCaseInsensitive: true,
      preserveSettings: false,
      defaultClientSchema,
      defaultUserSchema,
      defaultGuildSchema,
      defaultMemberSchema,
    });
    this.constants = Constants;
    this.config = config;
    this.commandsRan = 0;
    this.rawEvents = new RawEventStore(this);
    this.functions = new FunctionStore(this);
    this.registerStore(this.rawEvents);
    this.registerStore(this.functions);
    this.upvoters = new Set();
    const poster = new dbl("Pfft no", this);
    poster.bind();
  }

  // Alias
  get funcs() {
    return this.functions;
  }
  
  login() {
    return super.login(token);
  }
  
}

const client = new AmberClient();
client.login();