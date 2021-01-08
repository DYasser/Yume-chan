module.exports = {
    name: 'Hello',
    description: 'Greets the user',
    execute(message, args){
        message.channel.send("Hello master :heart:!");
    }
}