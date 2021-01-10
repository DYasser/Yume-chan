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
				const [list] = [JSON.parse(response.body)];
				const [post] = list.data.children;
				
	
				const permalink = post.data.permalink;
				const memeUrl = `https://reddit.com${permalink}`;
				const memeImage = post.data.url_overridden_by_dest;
				console.log("------------------");
				console.log(permalink);
				console.log(memeImage);
				console.log("------------------");
				if(memeImage[8]!== "i" && memeImage[9]!== "." && (memeImage[10]!== "i" || memeImage[10]!== "r")){
					oppai();
					memeImage = "";
					console.log("testing");
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

