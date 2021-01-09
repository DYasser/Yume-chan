const pagination = require('discord.js-pagination');
const Discord = require('discord.js');

module.exports = {
    name: 'list',
    description: 'I list you all the requests that have been done.',
    type: 'utility',
    execute(message, args){
        connection.query(`
        SELECT * FROM requests`, function(err, result, fields){
            if(err) throw err;
            console.log(result);
        })

        const requests = new Discord.MessageEmbed()
        .setTitle(':writing_hand: Requests :writing_hand:')
        .addField('`testing`', 'the test')
        .setTimestamp();
            
        
        pagination(message, requests)
    }
}