const Discord = require('discord.js');
const got = require('got');

module.exports = {
    name: 'oppai',
    description: 'NSFW! some oppais ... I guess I am not enough',
    type: 'stuff',
    execute(message, args){
		const embed = new Discord.MessageEmbed();
		oppai();
		function oppai(){
			got('https://www.reddit.com/r/ecchi/random/.json')
			.then(response => {
				console.log(JSON.parse(response.body));
				const [list] = JSON.parse(response.body);
				const [post] = list.data.children;
				
	
				const permalink = post.data.permalink;
				const memeUrl = `https://reddit.com${permalink}`;
				const memeImage = post.data.url;
				if(memeImage[8]!== "i"){
					oppai();
				}
				const memeTitle = post.data.title;
				const memeUpvotes = post.data.ups;
				const memeNumComments = post.data.num_comments;
	
				embed.setTitle(`${memeTitle}`);
				embed.setURL(`${memeUrl}`);
				embed.setColor('RANDOM');
				embed.setImage(memeImage);
				embed.setFooter(`👍 ${memeUpvotes} 💬 ${memeNumComments}`);
	
				message.channel.send(embed);
			})
			.catch(console.error);
		}
	    
    }
}

