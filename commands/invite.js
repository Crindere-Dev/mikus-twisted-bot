module.exports = {
	name: 'invite',
	description: 'gives glc invite link',
	execute(message) {
		message.channel.send('https://discord.gg/glc');
	},
};