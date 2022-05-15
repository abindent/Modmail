const modmailClient = require("../client/modmail");
const client = require("../index");

client.on("ready", () => {
    modmailClient.ready(); 
    console.log(`${client.user.tag} is up and ready to go!`)
    
});
