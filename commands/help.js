const pagination = require('discord.js-pagination');
const Discord = require('discord.js');
const fs = require('fs');

module.exports = {
    name: "help",
    description: "The help command, what do you expect?",

    async execute (message, args){

        let commands = {
            name: "",
            description:""
        };
        const commandFiles = fs.readdirSync('./commands/').filter( file => file.endsWith('.js'));
        for(const file of commandFiles){
            const command = require(`../commands/${file}`);
            console.log(command)
        }

        //Sort your commands into categories, and make seperate embeds for each category
        const stuff = new Discord.MessageEmbed()
        .setTitle('Does stuff')
        .addField('``', 'nothing yet, I\' wanna sleep so much so I\'l finish this some other day')
        .addField('`?hello`', 'greets you (on going)')
        .setTimestamp()

        const fun = new Discord.MessageEmbed()
        .setTitle('Fun')
        .addField('`?ping`', 'pong')
        .setTimestamp()

        const utility = new Discord.MessageEmbed()
        .setTitle('Utlity')
        .addField('`?request`', 'Request any kind of command to the bot')
        .addField('`?help`', 'Lists all available commands duh.. (on going)')
        .setTimestamp()

        const pages = [
                stuff,
                fun,
                utility
        ]

        const emojiList = ["⏪", "⏩"];

        //const timeout = '120000';

        pagination(message, pages, emojiList)
    }
}