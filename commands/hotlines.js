//z!hotlines
module.exports = {
	name: 'hotlines',
	description: 'Desc. Of said command',
	execute(message, args, Discord, client ,version) {
	let Hotlines = null;
    if (message.author.id == '247349845298249728'){
      	message.channel.send('please fucking die');
    } else {
      	switch (args[0]) {
			case 'US':
				Hotlines = new Discord.MessageEmbed()
					.setColor('#0099ff')
					.setTitle('Hotlines USA')
					.setDescription("yeet")
					.setFooter(`for more suicide hotlines please visit https://www.reddit.com/r/SuicideWatch/wiki/hotlines`);
				message.channel.send(hotlines);
			default: 
				Hotlines = new Discord.MessageEmbed()
        			.setColor('#0099ff')
        			.setTitle('Hotlines Info')
        			.setDescription("Canada: https://www.ccmhs-ccsms.ca/mental-health-resources-1\nUSA: https://www.talkspace.com/blog/wp-content/uploads/2017/12/resourcelist.pdf\nFor anyone else, there's this comprehensive list: https://checkpointorg.com/global/")
        			.setFooter(`for more suicide hotlines please visit https://www.reddit.com/r/SuicideWatch/wiki/hotlines`);
      			message.channel.send(Hotlines);
      }

    }

  },
};