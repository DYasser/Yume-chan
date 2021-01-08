module.exports = {
    name: 'request',
    description: 'Use this request command to request a command',
    execute(message, args, connection){
        const member = message.member;
        let username = member.user.username;

        let msg = message.content.split(" ");

        msg.shift();
        let command = msg[0];

        msg.shift();
        let description = msg.join(" ", msg); 
        
        let maxId = connection.query(`SELECT MAX(id) FROM requests`);

        console.log(maxId);


        /*connection.query(`
        INSERT INTO requests(username, commandName, description) 
        VALUES ( "`+ username +`",
            "`+ command +`",
            "`+ description +`")`)*/

        message.channel.send("Command name: " + command+ "\nDescription: " + description + "\nsent by "+`${member}`+"!");
    }
}
