module.exports = {
	name: 'time',
	description: 'gives time.is of a time zone',
	execute(message, args, Discord) {
		message.channel.send(`https://time.is/${args[0]}`);
	},
};