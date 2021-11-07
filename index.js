const Discord = require('discord.js')
const client = new Discord.Client()
const myCollection = new Discord.Collection();
const config = require('./config.json')
const fs = require("fs");

client.on("ready", async () => {
    console.log('Bot is started !')
});

client.login(config.token);

const query = require('samp-query')

var options = {
    host: '188.165.144.213'
}

query(options, function (error, response) {
    if(error)
        console.log(error)
    else 
        console.log(response)
});

let snipe = '*';

client.on('message', message => {
    if (message.content === `${snipe}sampinfo`) {
        let embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle("titre")
        .setDescription("Joueur connecté(s):")
        .setDescription("Record de connectés:")
        .setThumbnail("https://cdn.discordapp.com/attachments/804003681702903880/901601210786807858/LRP.png%22")
        .addFields([
           {name: "Ip du serveur:", value: "188.165.144.213:1300", isInline: true },
           {name: "Version du serveur:", value: "0.3DL-R1", inline: true },
        ])
        .addField("Êtat du serveur:", "Allumé", true)
    
      message.channel.send(embed)
    }
});

client.on('message', message => {
    if (message.content === `${snipe}forum`) {
        let embed = new Discord.MessageEmbed()
        .setTitle("L'url du forum:")
        .setDescription("https://libertyrp.info/board/forum.php")
      
       message.channel.send(embed)
    }
});