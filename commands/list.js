const pagination = require('discord.js-pagination');
const Discord = require('discord.js');

module.exports = {
    name: 'list',
    description: 'I list you all the requests that have been done.',
    type: 'utility',
    execute(message, args){
        let requests = new Discord.MessageEmbed();

        connection.query(`
        SELECT * FROM requests`, function(err, result, fields){
            
            requests
            .setTitle(':writing_hand: Requests :writing_hand:')
            .setTimestamp();
    
            for(command in result){
                console.log(result);
                requests.addField('`?`'+result[command].commandName, ''+result[command].description);
            }
        })

        
            
        const pages = [
            requests
        ]

        const emojiList = ["⏪", "⏩"];

        const timeout = '0';

        pagination(message, pages, emojiList, timeout)
    }
}