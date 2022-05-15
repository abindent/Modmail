const modmailClient = require("../../client/modmail");

module.exports = {
    name: 'close',
    description: 'Closee your ticket.',
    options: [
        {
            name: 'reason',
            description: "What is the reason?",
            type: "STRING",
            required: true
        },
    ],        

    run: async (client, interaction,  args) =>{
        const [ reason ] = args;
        modmailClient.deleteMail({ channel: interaction.channel.id , reason})
    }

}