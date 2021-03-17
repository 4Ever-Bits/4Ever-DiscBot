import container from "./config/inversify.config";
import { TYPES } from "./config/types";
import { Bot } from "./bot";

const bot = container.get<Bot>(TYPES.Bot);

bot
  .listen()
  .then(() => {
    console.log("Logged in");
  })
  .catch(error => {
    console.error(error);
  });
