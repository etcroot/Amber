const { Store } = require("klasa");
const AmberFunction = require("../structures/AmberFunction.js");

class FunctionStore extends Store {
  constructor(client) {
    super(client, "functions", AmberFunction);
  }

  async init() {
    await super.init();
    for(const [key, value] of this.entries()) {
      this[key] = value.run.bind(value);
      for(const name of value.aliases) {
        Object.defineProperty(this, name, {
          get: () => {
            return this.get(value.name).run.bind(this);
          }
        });
      }
    }
  }
}

module.exports = FunctionStore;