/*
module.exports = {
    name: 'abinick',
    description: 'changes abi\'s nick',
    execute(message, args, Discord) {
        if(!message.member.roles.cache.find(r => r.name === 'gex')) return message.channel.send('you aren\'t gex'); // returns if using isnt gex
        let nick = args.slice(0).join(' ');
        message.guild.members.cache.get('475688899356786698').setNickname(nick);
    },
};
*/