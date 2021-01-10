module.exports = {
    name: 'c',
    description: 'Calculator: Big brain time',
    type: 'stuff',
    execute(message, args){
        calcul = message.content.slice(3);
        console.log(calcul);
        message.channel.send("testing calculator!");
    }
}