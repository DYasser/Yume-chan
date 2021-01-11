module.exports = {
    name: 'c',
    description: 'Calculator: Big brain time',
    type: 'stuff',
    execute(message, args){
        calcul = message.content.slice(3);
        console.log(calcul);
        if(!calcul.match(/^[a-z][A-Z]+$/)){
            console.log("yh, not a number");
        }
        message.channel.send("testing calculator!");
    }
}