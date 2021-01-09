module.exports = {
    name: 'hello',
    description: 'I come up with a greeting for my master',
    page: 'stuff',
    execute(message, args){
        message.channel.send("Hello master :heart:");
    }
}