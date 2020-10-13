module.exports = {
	name: 'say',
	description: 'z!say command',
	execute(message) {
                if(!message.member.roles.cache.find(r => r.name === 'gex')) return message.channel.send('You do not have gex.');
                message.delete();
                const mess3 = message.content.substring(6);
                message.channel.send(mess3);
	},
};