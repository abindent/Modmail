const { MessageEmbed } = require("discord.js");
const { ModMailClient } = require("reconlx");
const client =  require("../index");
require('dotenv').config()

const modmailclient = new ModMailClient({
    client,
    guildId: process.env.GUILD_ID,
    category: process.env.CATEGORY_ID,
    transcriptChannel: process.env.TRANSCRIPT_CHANNEL_ID,
    modmailRole: process.env.MODMAIL_ROLE_ID,
    mongooseConnectionString: process.env.MONGO_URI,
    custom: {
        user: (user)=>{
            return {
                embeds: [
                    new MessageEmbed()
                    .setAuthor(user.username, user.displayAvatarURL)
                    .setTitle(`Hello ${user.username}`)
                    .setColor(0x00AE86)
                    .setDescription("As per your request we have created this ticket for you.\nPlease share your problem below.\n**If you have created this ticket for no reason then you can imagine what will happen with you.**\nAnyways start describing you problem.\nOur Staffs will reach you soon.")
                    .setFooter("🎫 SUPPORT TICKET.", 'https://ticketsbot.net/assets/img/logo.png')
                    .setThumbnail("https://ticketsbot.net/assets/img/logo.png")
                    .setTimestamp(Date.now())
                ]
            }
        },
       channel: (user) =>{
           return {
               embeds: [
                   new MessageEmbed()
                   .setAuthor(`Requested By ${user.name}`, user.displayAvatarURL)
                   .setDescription(`Hello ${user.username} needs help`)
               ]
           }
       },
        
    }
})

module.exports = modmailclient

