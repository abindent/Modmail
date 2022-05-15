const { Client, Collection } = require("discord.js");
require('dotenv').config()

const client = new Client({
    intents: 32767,
    partials: ["CHANNEL"],
    presence: {
     status: 'idle',
    activity: {
     name: "Everyone's DM",
     type: 'WATCHING',
   },
  }, 
});
module.exports = client;

// Global Variables
client.commands = new Collection();
client.slashCommands = new Collection();
client.config = require("./config.json");

// Initializing the project
require("./handler")(client);

client.login(process.env.BOT_TOKEN);
