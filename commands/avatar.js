module.exports = {
    name: 'av',
    description: 'gets avatar',
    execute(message, client, Discord){
        let user = null;
        if (message.mentions.users.array.length != '0') {
            user = message.mentions.first();
        } else {
            user = message.author;
        }
        const avatarEmbed = new Discord.MessageEmbed()
            .setColor(0x333333)
            .setAuthor(user.username)
            .setImage(user.avatarURL() + '?size=2048');

        message.channel.send(avatarEmbed);
    }
}