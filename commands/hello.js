module.exports = {
    name: 'hello',
    description: 'Greets the user',
    execute(message, args){
        message.channel.send("Hello master :heart:");
    }
}