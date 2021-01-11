module.exports = {
    name: 'hello',
    description: 'I come up with a greeting for my master',
    type: 'stuff',
    execute(message, args){
        message.react('🥰');
        message.channel.send("Hello master :heart:");
    }
}