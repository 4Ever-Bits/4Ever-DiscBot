"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_config_1 = require("./config/inversify.config");
const types_1 = require("./config/types");
const bot = inversify_config_1.default.get(types_1.TYPES.Bot);
bot
    .listen()
    .then(() => {
    console.log("Logged in");
})
    .catch(error => {
    console.error(error);
});
//# sourceMappingURL=index.js.map