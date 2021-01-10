module.exports = {
    name: 'c',
    description: 'Calculator: Big brain time',
    type: 'stuff',
    execute(message, args){
        console.log(message.content);
        message.channel.send("testing calculator!");
    }
}