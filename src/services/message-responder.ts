import { Message } from "discord.js";
import { inject, injectable } from "inversify";
import { GitFinder } from "../commands/GitHub/git-finder";
import { TYPES } from "../config/types";

@injectable()
export class MessageResponder {
  private gitFinder: GitFinder;

  private prefix = "!";

  constructor(@inject(TYPES.GitFinder) gitFinder: GitFinder) {
    this.gitFinder = gitFinder;
  }

  async handle(message: Message): Promise<Message | Message[]> {
    const commandBody = message.content.slice(this.prefix.length);
    const args = commandBody.split(" ");
    const command = args.shift().toLowerCase();

    if (command === "git") {
      const response = await this.gitFinder.gitHandler(args);
      return message.reply(response);
    }

    return Promise.reject(new Error("Command not found"));
  }
}
