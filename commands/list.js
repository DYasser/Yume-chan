const pagination = require('discord.js-pagination');
const Discord = require('discord.js');

module.exports = {
    name: 'list',
    description: 'I list you all the requests that have been done.',
    type: 'utility',
    execute(message, args){
        const requests;

        connection.query(`
        SELECT * FROM requests`, function(err, result, fields){
            console.log(result);
            
            requests = new Discord.MessageEmbed()
            .setTitle(':writing_hand: Requests :writing_hand:')
            .setTimestamp();
    
            for(command in result){
                if(commands[command].type === "utility"){
                    utility.addField('`?`'+result[command].commandName, ''+result[command].description);
    
                }
            }
        })

        
            
        pages = [requests]

        const emojiList = ["⏪", "⏩"];

        const timeout = '0';

        pagination(message, pages, emojiList, timeout)
    }
}