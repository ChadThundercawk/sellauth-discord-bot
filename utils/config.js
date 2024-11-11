import 'dotenv/config';

let config = {
  BOT_TOKEN: process.env.BOT_TOKEN || '',
  BOT_GUILD_ID: process.env.BOT_GUILD_ID || '',
  BOT_USER_ID_WHITELIST: process.env.BOT_USER_ID_WHITELIST?.split(',') || [],
  BOT_CUSTOMER_ROLE_ID: process.env.BOT_CUSTOMER_ROLE_ID || '',
  SA_API_KEY: process.env.SA_API_KEY || '',
  SA_SHOP_ID: process.env.SA_SHOP_ID || ''
};

export { config };
