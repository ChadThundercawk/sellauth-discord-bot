import { Client, GatewayIntentBits } from 'discord.js';
import { Bot } from './classes/Bot.js';
import { Api } from './classes/Api.js';
import http from 'http'; // Use `import` if you're using ES modules

const api = new Api();

const port = process.env.PORT || 3000;
http.createServer((req, res) => {
  res.writeHead(200);
  res.end('Bot is running');
}).listen(port, () => {
  console.log(`HTTP server listening on port ${port}`);
});

export const bot = new Bot(
  new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages]
  }),
  api
);
