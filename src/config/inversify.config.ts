import "reflect-metadata";
import { Container } from "inversify";
import { TYPES } from "./types";
import { Bot } from "../bot";
import { Client } from "discord.js";
import { PingFinder } from "../services/ping-finder";
import { MessageResponder } from "../services/message-responder";
import { GitFinder } from "../commands/GitHub/git-finder";
import { GitOrgCommand } from "../commands/GitHub/git-org-link";

const container = new Container();

container.bind<Bot>(TYPES.Bot).to(Bot).inSingletonScope();
container.bind<Client>(TYPES.Client).toConstantValue(new Client());
container.bind<string>(TYPES.Token).toConstantValue(process.env.TOKEN);
container.bind<PingFinder>(TYPES.PingFinder).to(PingFinder).inSingletonScope();

// Github commands
container.bind<GitFinder>(TYPES.GitFinder).to(GitFinder).inSingletonScope();
container
  .bind<GitOrgCommand>(TYPES.GitOrgCommand)
  .to(GitOrgCommand)
  .inSingletonScope();
container
  .bind<string>(TYPES.GitOrgLink)
  .toConstantValue(process.env.GITHUB_ORG_LINK);

container
  .bind<MessageResponder>(TYPES.MessageResponder)
  .to(MessageResponder)
  .inSingletonScope();

export default container;
