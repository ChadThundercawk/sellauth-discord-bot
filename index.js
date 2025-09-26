import { Client, GatewayIntentBits } from 'discord.js';
import { Bot } from './classes/Bot.js';
import { Api } from './classes/Api.js';

const api = new Api();

export const bot = new Bot(
  new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages]

    const http = require('http');

const port = process.env.PORT || 3000;
http.createServer((req, res) => {
  res.writeHead(200);
  res.end('Bot is running');
}).listen(port, () => {
  console.log(`HTTP server listening on port ${port}`);
});

  }),
  api
);
