module.exports = {
    name: 'update',
	description: 'updates the bot',
	execute(message, args, Discord) {
        if(!message.member.roles.cache.find(r => r.name === 'gex')) return message.channel.send('you aren\'t gex'); // returns if using isnt gex
        //filesys import
        const fs = require('fs');
        //json maker - makes a file and makes a startup message
        let persistantStartupmessage = { 
            channel: message.channel.id,
            message: 'Finished Updating Bot' 
        };
        //write file
        let data = JSON.stringify(persistantStartupmessage);
        fs.writeFileSync('startupMessage.json', data);
        //import execution
        const { exec } = require("child_process");
        message.reply("Updating Discord bot, please wait...")
        //actually do shit such as update the bot
        exec("cd /etc/cringebot/cringe-bot-v2/cringe-bot69420 && git pull && pm2 restart 0", (error, stdout, stderr) => {
            if (error) {
                message.reply(`Error encountered!\n\n\`\`\`${error.message}\`\`\``);
                return;
            }
            if (stderr) {
                message.reply(`stderr encountered!\n\n\`\`\`${stderr}\`\`\``);
                return;
            }
            message.reply(stdout);
        });
	},
};