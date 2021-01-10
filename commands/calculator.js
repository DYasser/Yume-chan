module.exports = {
    name: 'calculator',
    description: 'Big brain time',
    type: 'stuff',
    execute(message, args){
        console.log(message);
        message.channel.send("testing calculator!");
    }
}