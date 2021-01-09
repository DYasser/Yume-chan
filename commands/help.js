const pagination = require('discord.js-pagination');
const Discord = require('discord.js');
const fs = require('fs');

module.exports = {
    name: "help",
    description: "The help command, what do you expect?",
    page: 'utility',
    async execute (message, args){

        let commands = [];
        const commandFiles = fs.readdirSync('./commands/').filter( file => file.endsWith('.js'));
        for(const file of commandFiles){
            const command = require(`../commands/${file}`);
            commands.push({"type": command.page,
                        "name": command.name,
                        "description": command.description})
        }

        console.log(commands);
        //Sort your commands into categories, and make seperate embeds for each category
        const stuff = new Discord.MessageEmbed()
        .setTitle('Does stuff')
        .addField('``', 'nothing yet, I\' wanna sleep so much so I\'l finish this some other day')
        .setTimestamp()
        for(command in commands){
            if(command.type === "stuff")
            stuff.addField('`?`'+command.name, ''+command.description)
        }

        const fun = new Discord.MessageEmbed()
        .setTitle('Fun')
        .setTimestamp()
        for(command in commands){
            if(command.type === "fun")
            fun.addField('`?`'+command.name, ''+command.description)
        }

        const utility = new Discord.MessageEmbed()
        .setTitle('Utlity')
        .setTimestamp()
        for(command in commands){
            if(command.type === "utility")
            utility.addField('`?`'+command.name, ''+command.description)
        }

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