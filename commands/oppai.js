const Discord = require('discord.js');
const got = require('got');

module.exports = {
    name: 'oppai',
    description: 'NSFW! some oppais ... I guess I am not enough',
    type: 'stuff',
    execute(message, args){
		const embed = new Discord.MessageEmbed();
		let pass = true;
		oppai();
		function oppai(){
			pass = true;
			got('https://www.reddit.com/r/AnimeTitties/random/.json')
			.then(response => {
				const [list] = JSON.parse(response.body);
				const [post] = list.data.children;
				
	
				const permalink = post.data.permalink;
				const memeUrl = `https://reddit.com${permalink}`;
				const memeImage = post.data.url;
				if(memeImage[8]!== "i"){
					pass = false;
					console.log("yes");
					oppai();
					break;
				}
				const memeTitle = post.data.title;
				const memeUpvotes = post.data.ups;
				const memeNumComments = post.data.num_comments;
	
				embed.setTitle(`${memeTitle}`);
				embed.setURL(`${memeUrl}`);
				embed.setColor('RANDOM');
				embed.setImage(memeImage);
				embed.setFooter(`👍 ${memeUpvotes} 💬 ${memeNumComments}`);
	
				if(pass)
					message.channel.send(embed);
			})
			.catch(console.error);
		}
	    
    }
}

