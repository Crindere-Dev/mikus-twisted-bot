module.exports = {
	name: 'break',
	description: 'toggles user break',
	execute(message, args, Discord, client ,version) {
        const breakChannel = '733455387067416596';
        if(message.member.roles.cache.find(r => r.name === "gex") || message.member.roles.cache.find(r => r.name === "Blood Priest")){
            if(message.member.roles.cache.find(r => r.name === 'On Break')) {
                client.guilds.cache.get('590694100475576332').members.cache.get(message.author.id).roles.remove('760863612276310027');
                message.reply('you are no longer on break');
                client.channels.cache.get(breakChannel).send(`User: ${message.author}\nUPDATE: Break over`);
            } else {
                client.guilds.cache.get('590694100475576332').members.cache.get(message.author.id).roles.add('760863612276310027');
                message.reply('you are now on break');
                let csvArgs = message.content.substring(8).split(",");
                if(message.member.roles.cache.find(r => r.name === 'Antediluvian God')) {
                    const role = 'AG';
                    client.channels.cache.get(breakChannel).send(`User: ${message.author}\nRole: ${role}\nReason: ${csvArgs[0]}\nLength: ${csvArgs[1]}`);
                } else if (message.member.roles.cache.find(r => r.name === 'High Priest')) {
                    const role = 'HP';
                    client.channels.cache.get(breakChannel).send(`User: ${message.author}\nRole: ${role}\nReason: ${csvArgs[0]}\nLength: ${csvArgs[1]}`);
                } else {
                    const role = 'BP';
                    client.channels.cache.get(breakChannel).send(`User: ${message.author}\nRole: ${role}\nReason: ${csvArgs[0]}\nLength: ${csvArgs[1]}`);
                }
                
            }
        }
	},
};
