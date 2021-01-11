module.exports = {
    name: 'choose',
    description: 'I can help you choose between many choices, just make spaces between choices',
    type: 'utility',
    execute(message, args){
        let msg = message.content.split(" ");

        msg.reserve();
        msg.pop();

        let choice = msg.length;

        let randomChoice = Math.floor(Math.random()*1000)%choice;

        message.channel.send("The choice is clear: " + randomChoice);
    }
}