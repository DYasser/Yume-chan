module.exports = {
    name: 'goodmorning',
    description: 'Poke my face to wake me up',
    type: 'stuff',
    execute(message, args){
        message.react('🔔');
        message.channel.send("I'm already awake 😟");
    }
}