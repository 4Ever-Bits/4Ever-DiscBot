import { Client, Message } from "discord.js";
import { inject, injectable } from "inversify";
import { TYPES } from "./config/types";
import { MessageResponder } from "./services/message-responder";
// import { MessageResponder } from "./services/message-responder";

@injectable()
export class Bot {
  private client: Client;
  private readonly token: string;
  private messageResponder: MessageResponder;

  private prefix = "!";

  constructor(
    @inject(TYPES.Client) client: Client,
    @inject(TYPES.Token) token: string,
    @inject(TYPES.MessageResponder) messageResponder: MessageResponder
  ) {
    this.client = client;
    this.token = token;
    this.messageResponder = messageResponder;
  }

  public listen(): Promise<string> {
    this.client.on("message", (message: Message) => {
      if (message.author.bot) {
        console.log("Ignoring bot messages");
        return;
      }
      if (!message.content.startsWith(this.prefix)) {
        console.log("Ignoring bot messages");
        return;
      }

      console.log("Message received! Contents: ", message.content);

      this.messageResponder
        .handle(message)
        .then(() => {
          console.log("Response sent!");
        })
        .catch((error: Error) => {
          console.log(error.message);
        });
    });

    return this.client.login(this.token);
  }
}
