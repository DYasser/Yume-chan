module.exports = {
    name: 'ping',
    description: 'PingPong',
    page: 'fun',
    execute(message, args){
        message.channel.send("pong!");
    }
}