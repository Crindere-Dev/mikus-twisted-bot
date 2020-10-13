module.exports = {
	name: 'strikeappeal',
	description: 'displays strike appeal information',
	execute(message) {
		message.channel.send(`Hello there, <@${message.author.id}>! if you would like to appeal a strike, you can DM <@738765589748645908>. **We recommend you follow this format when appealing a strike:** \n \n - Why you were crypted: \n - The approximate time you were crypted: \n - How/why you've changed: \n - An apology: \n - Other comments: \n \n *(If the ModMail bot is down, DM a moderator instead!)*`);
	},
};