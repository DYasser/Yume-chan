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
        .addField('Nothing', 'nothing yet, I wanna sleep so much so I\'ll finish this some other day')
        .setTimestamp()
        for(command in commands){
            console.log("command test type: ");
            console.log(commands[command]);
            console.log(commands[command].type);
            if(commands[command].type === "stuff"){
                stuff.addField('`?`'+commands[command].name, ''+commands[command].description);
            }
        }

        const fun = new Discord.MessageEmbed()
        .setTitle('Fun')
        .setTimestamp()
        for(command in commands){
            if(commands[command].type === "fun"){
                fun.addField('`?`'+commands[command].name, ''+commands[command].description);

            }
        }
        const utility = new Discord.MessageEmbed()
        .setTitle('Utlity')
        .setTimestamp()
        for(command in commands){
            if(commands[command].type === "utility"){
                utility.addField('`?`'+commands[command].name, ''+commands[command].description);

            }
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