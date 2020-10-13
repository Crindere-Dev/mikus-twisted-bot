module.exports = {
	name: 'eval',
	description: 'run code in discord',
	execute(message, args, Discord, client ,version) {
        if(!message.member.roles.cache.has('763873529862029332')) return message.channel.send('you do not have eval perms'); // returns if using isnt gex
        try {
            const code = args.join(" ");
            let evaled = eval(code);
     
            if (typeof evaled !== "string") {
                evaled = require("util").inspect(evaled);
            }
            message.channel.send('code executed');
        } catch (err) {
            message.channel.send(`\`ERROR\` \`\`\`xl\n${err}\n\`\`\``);
        }
	},
};
/*
Example usage of this command would be to construct embeds like the following
z!eval //
const truth = new Discord.MessageEmbed()
            .setColor('#0eddf6')
            .setTitle('miku')
            .setDescription('is fucking')
            .setFooter('awesome')
            .setImage('https://cdn.discordapp.com/avatars/333795355118403586/6e2209e32a8fd8f9d24023d0c309c763.webp?size=128');
message.channel.send(truth);
*/