module.exports = {
	name: 'error',
	description: 'errors out',
	execute(message, args, Discord, client ,version) {
        if(!message.member.roles.cache.find(r => r.name === 'gex')) return message.channel.send('you aren\'t gex'); // returns if using isnt gex
        throw new Error('Crash Test dummy');
	},
};