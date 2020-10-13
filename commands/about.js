module.exports = {
	name: 'about',
	description: 'Displays bot information',
	execute(message, args, Discord, client ,version) {
        const aboutMessage = new Discord.MessageEmbed()
	        .setColor('#0099ff')
	        .setTitle('About Bot')
	        .setDescription('Type `z!help` for commands. \n \n Bot Created by  <@723253215113773106>, rewritten and currently hosted by <@333795355118403586> and <@452422621284532230>')
	        .setFooter(`Cringe bot build ${version} || This bot supports LGBTQIA+`);

		message.channel.send(aboutMessage);
	},
};
