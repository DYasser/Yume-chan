module.exports = {
    name: 'ping',
    description: 'pong',
    page: 'fun',
    execute(message, args){
        message.channel.send("pong!");
    }
}