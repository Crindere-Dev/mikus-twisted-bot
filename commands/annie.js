module.exports = {
	name: 'lb64d',
	description: 'b64 decoded from last message',
	execute(message, args, Discord, client ,version) {
        message.reply('debug msg');
        message.channel.messages.fetch({limit: 2}).then(res => {
            let lm = res.array()[1]
            const lstArgs = lm.content.split(' ');
            const resb = "";
            let a = "";
            message.reply('debug msg2');
            lstArgs.forEach( A=> {
                message.reply('started condition');
                if (A.length >= 15) {
                    message.reply('condition replied true' + A.length);
                    res = A;
                }
            });
            message.reply('debug message 3');
            message.reply(Buffer.from(A, 'base64').toString());
           })
	},
};