module.exports = {
	name: 'b64d',
	description: 'b64 decoded',
	execute(message, args, Discord, client ,version) {
        message.reply(Buffer.from(args[0], 'base64').toString());
	},
};