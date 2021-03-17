"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const inversify_1 = require("inversify");
const types_1 = require("./types");
const bot_1 = require("../bot");
const discord_js_1 = require("discord.js");
const ping_finder_1 = require("../services/ping-finder");
const message_responder_1 = require("../services/message-responder");
const git_finder_1 = require("../commands/GitHub/git-finder");
const git_org_link_1 = require("../commands/GitHub/git-org-link");
const container = new inversify_1.Container();
container.bind(types_1.TYPES.Bot).to(bot_1.Bot).inSingletonScope();
container.bind(types_1.TYPES.Client).toConstantValue(new discord_js_1.Client());
container.bind(types_1.TYPES.Token).toConstantValue(process.env.TOKEN);
container.bind(types_1.TYPES.PingFinder).to(ping_finder_1.PingFinder).inSingletonScope();
// Github commands
container.bind(types_1.TYPES.GitFinder).to(git_finder_1.GitFinder).inSingletonScope();
container
    .bind(types_1.TYPES.GitOrgCommand)
    .to(git_org_link_1.GitOrgCommand)
    .inSingletonScope();
container
    .bind(types_1.TYPES.GitOrgLink)
    .toConstantValue(process.env.GITHUB_ORG_LINK);
container
    .bind(types_1.TYPES.MessageResponder)
    .to(message_responder_1.MessageResponder)
    .inSingletonScope();
exports.default = container;
//# sourceMappingURL=inversify.config.js.map