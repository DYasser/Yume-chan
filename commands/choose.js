module.exports = {
    name: 'choose',
    description: 'I can help you choose between many choices, just make spaces between choices',
    type: 'utility',
    execute(message, args){
        let msg = message.content.split(" ");
        console.log(msg)
        message.channel.send("the choices are: ");
        msg.forEach( e => {
            message.channel.send("-" + e);
        });
    }
}