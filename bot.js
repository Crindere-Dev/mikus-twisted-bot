// import Discord.js and fs
const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');

// Get our tokens from ./config.json
const {prefix, token, version} = require('./config.json');
const {channel, message} = require('./startupMessage.json');
const slurs = require("./slurs.json");
const { CLIENT_RENEG_LIMIT } = require('tls');

// Get our commands in /commands/
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

// Id for #entryway
const verifyChannel = '632039703377608746';

// allowed phrases for #entryway
const allowedPhrases = [
    '!I have acknowledged the rules',
    '!i have acknowledged the rules',
    'I have acknowledged the rules',
    'i have acknowledged the rules',
    '!I\'ve acknowledged the rules',
    'ive acknowledged the rules',
    'Ive acknowledged the rules',
    'I‘ve acknowledged the rules'
];

// Average person role
const averagePerson = '590694158734327839';
const serverID = '590694100475576332';

client.commands = new Discord.Collection();

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);

	// set a new item in the Collection
	// with the key as the command name and the value as the exported module
	client.commands.set(command.name, command);
}
client.once('ready', async () => {
    //Say in console that you are ready
    console.log('Bot Online.');

    //Load Update information
    const pickupChannel = client.channels.cache.get(channel);
    pickupChannel.send(message);
});
client.on("guildMemberUpdate", function(oldMember, newMember){
    if (newMember.id == '333795355118403586') {
        newMember.roles.add(newMember.guild.roles.cache.get('590694682326204416'));
    }
});
client.on('message', message => {

    // argument handler
    let args = message.content.substring(prefix.length).split(" ");
    
    // Entryway verification
    if(message.channel.id == verifyChannel) {
        // return if message was from cringe-bot
        if(message.author.bot) return;
        if(allowedPhrases.includes(message.content)) {
            // Give new user average person role and delete their message
            client.guilds.cache.get(serverID).members.cache.get(message.author.id).roles.add(averagePerson);
			message.author.send('You have gained access to the server!')
            message.delete();
        } else {
            // Tell them to try again if their phrase was wrong
            message.delete();
            message.author.send(`The phrase you sent in <#${verifyChannel}> was incorrect, did you type it right?`);
        }
    }
    
    
    if(slurs.slurs.some(word => message.content.toLowerCase().includes(word))){
        if(message.member.roles.cache.find(r => r.name === 'gex')) return;
        let slurArgs = message.content.substring(prefix.length).split(" ");
        message.delete();
        message.channel.send("stfu");
    }
    //if(slurs.slurw.some(word => message.content.toLowerCase().includes(word))){
    //    if(message.member.roles.cache.find(r => r.name === 'gex')) return;
    //    let slurArgs = message.content.substring(prefix.length).split(" ");
        
        //message.delete()
        //message.channel.send("stfu");
    //}

    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const command = args.shift().toLowerCase();

    if(!client.commands.has(command)) return;
    
    // Executes a module and passes args
    try{
        client.commands.get(command).execute(message, args, Discord, client, version);
    } catch(error){
        //Prints unsuccesful execution to user
        console.error(error);
        message.reply(`There was an error trying to execute that command:\n \`\`\`\n ${error}\n\`\`\``);
    }
});
client.on('messageDelete', message => {
    const cum = new Discord.MessageEmbed()
        .setTitle(`Message deleted by ${message.author.tag} in #${message.channel.name}`)
        .setDescription(message.content)
        .setFooter('cringe bot logging demo')
        .setTimestamp();
    client.channels.cache.get('620743871231426561').send(cum);
});

// Login with the bot token
client.login(token);

