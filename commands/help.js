module.exports = {
	name: 'help',
	description: 'Displays help information.',
	execute(message, args, Discord, _, version) {
        let d = null;
        switch (args[0]) {
            case 'modOnly' :
                d = new Discord.MessageEmbed()
                    .setColor('#1f8b4c')
                    .setDescription("Commands:\n\n`z!ban` Bans User\n`z!jokeban` Creates a fake ban message to troll\n`z!coveritup` creates a really big message to hide other messages\n`z!break` Turns out half our mod team has mental issues\n`z!say` Allows you to send a message as the bot\n`z!error` forces bot to crash a module for debugging reasons\n`z!vote` Gr4pe is a fucking idiot and needs to finish that" + "\n`z!abinick` sets abi\'s nickname (pls stop self depreciating :(  )\n`z!update` Updates cringe bot\n`z!eval` **Developer Only** command to test scripts")
                    .setFooter(`Cringe bot Version ${version}`)
                    .setTitle('Mod Commands')
                    .setTimestamp();
                message.channel.send(d);
                break;
            case 'averagePerson' :
                d = new Discord.MessageEmbed()
                    .setColor('#1f8b4c')
                    .setDescription("`z!rule <number>` - Reads out whatever rule you requested. \n`z!about` - Lists information about the bot creator, bot host, bot version, etc. \n`z!strikeappeal` - Tells you how to submit a strike appeal. \n`z!help` - Sends this message.\n`z!b64d` decodes base 64\n`z!av` shows your avatar\n`z!zuck` Get Wi-Fi anywhere you go~\n`z!time` shows time in a timezone\n`z!tip` report a users actions")
                    .setFooter(`Cringe bot Version ${version}`)
                    .setTitle('Average Person Commands')
                    .setTimestamp();
                //snap my neck pls - immortal-miku
                message.channel.send(d);
                break;
            case 'all' :
                let e = new Discord.MessageEmbed()
                    .setColor('#008080')
                    .setDescription("`z!rule <number>` - Reads out whatever rule you requested. \n`z!about` - Lists information about the bot creator, bot host, bot version, etc. \n`z!strikeappeal` - Tells you how to submit a strike appeal. \n`z!help` - Sends this message.\n`z!b64d` decodes base 64\n`z!av` shows your avatar\n`z!zuck` Get Wi-Fi anywhere you go~\n`z!time` shows time in a timezone\n`z!tip` report a users actions")
                    .setFooter(`Cringe bot Version ${version}`)
                    .setTitle('Average Person Commands')
                    .setTimestamp();
                d = new Discord.MessageEmbed()
                    .setColor('#1f8b4c')
                    .setDescription("Commands:\n\n`z!ban` Bans User\n`z!jokeban` Creates a fake ban message to troll\n`z!coveritup` creates a really big message to hide other messages\n`z!break` Turns out half our mod team has mental issues\n`z!say` Allows you to send a message as the bot\n`z!error` forces bot to crash a module for debugging reasons\n`z!vote` Gr4pe is a fucking idiot and needs to finish that" + "\n`z!abinick` sets abi\'s nickname (pls stop self depreciating :(  )\n`z!update` Updates cringe bot\n`z!eval` **Developer Only** command to test scripts")
                    .setFooter(`Cringe bot Version ${version}`)
                    .setTitle('Mod Commands')
                    .setTimestamp();
                message.channel.send(d);
                message.channel.send(e);
                break;
            default:
                message.channel.send('Please specify option such as averagePerson, all, or modOnly');

        }
	},
};