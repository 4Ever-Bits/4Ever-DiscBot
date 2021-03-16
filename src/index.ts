// const Discord = require("discord.js");
import * as discord from "discord.js";
const client = new discord.Client();

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
});

const prefix = "!";

client.on("message", msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;

  const commandBody = msg.content.slice(prefix.length);
  const args = commandBody.split(" ");
  const command = args.shift().toLowerCase();

  if (command === "ping") {
    const timeTaken = Date.now() - msg.createdTimestamp;
    msg.reply(`Pong! This message had a latency of ${timeTaken}ms.`);
  }
});

client.login("ODIxMTg1MDQxNzM2MTM4Nzky.YFACKg.9Zwx5HhP7LsVTYgcWZG-3hfZJ80");
