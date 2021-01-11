module.exports = {
    name: 'hello',
    description: 'I come up with a greeting for my master',
    type: 'stuff',
    execute(message, args){
        message.react('💖');
        
        let randomMsg = Math.floor(Math.random()*10)%6;

        switch(randomMsg){
            case 0:
                message.channel.send("Hello master :heart:");
                break;
            case 1:
                message.channel.send("Ohayoo~~ I hope you're doing great :heart:");
                break;
            case 2:
                message.channel.send("Wsap aniki :heart:");
                break;
            case 3:
                message.channel.send("Senpai~~ Ohayo :heart:");
                break;
            case 4:
                message.channel.send("Onii~chan Ohayo :heart:");
                break;
            case 5:
                message.channel.send("Hii~ hope u're feeling good :heart:");
                break;
        }
    }
}