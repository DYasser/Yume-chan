module.exports = {
    name: 'hello',
    description: 'Greets the user',
    page: 'stuff',
    execute(message, args){
        message.channel.send("Hello master :heart:");
    }
}