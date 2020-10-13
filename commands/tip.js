module.exports = {
	name: 'tip',
	description: 'a report command',
	execute(message, args, Discord, client ,version) {
        const orgasm = args.slice(0).join(' ');
        const d = new Discord.MessageEmbed()
            .setTitle('Report Recieved')
            .setDescription(orgasm)
            .setFooter(`sent by ${message.author.username}`)
            .setTimestamp();
        client.channels.cache.get('764906160334962750').send(`@here`);
        client.channels.cache.get('764906160334962750').send(d);
        message.channel.send('report sent to mods');
	},
};