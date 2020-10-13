// TODO: Rework index.js

const fs = require('fs');
const Discord = require('discord.js');
const {prefix, token} = require('./config.json');
const {channel, message} = require('./startupMessage.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const notAllowed = [
    "nigger",
    "retard",
    "gachatard",
    "n1gger",
    "buftie",
    "bumbandit",
    "bumchum",
    "choad",
    "chodes",
    "cuntflaps",
    "dunecoon",
    "fag",
    "fagg",
    "faggiot",
    "faggot",
    "faggotry",
    "faggots",
    "faggs",
    "fagit",
    "fagots",
    "fags",
    "gook",
    "heil hitler",
    "heilhitler",
    "jiggaboo",
    "k.y.s",
    "k.y.s.",
    "kyke",
    "negre",
    "ngresse",
    "nig-nog",
    "nigger",
    "niggers",
    "niggu",
    "nigguh",
    "nignog",
    "sandnigger",
    "gëy",
    "kys",
    "homo",
    "niga ",
    "puta ",
    "nıgga",
    "nïgga",
    "n i g g a",
    "nigga",
    "nibba",
    "nibber",
    " ni🅱️🅱️a",
    " ni🅱️🅱️er",
    "n¡gger",
    "n¡ggers",
    "ñ¡gger",
    "ñ¡ggers",
    "fagot",
    "gachatard",
    "n.igger",
    "ni.gger",
    "nig.ger",
    "nigg.er",
    "nigge.r",
    "niggr",
    "nlgger",
    "f@​g",
    "gacha-tard",
    "gachanig",
    "gachanigger",
    "gachafag",
    "gachafaggot",
    "fucktard",
    "gaycha",
    "tranny",
    "🇳 🇮 🇬 🇬 🇦",
    "🇳 🇮 🇬 🇬 🇪 🇷",
    "🇫 🇦 🇬",
    "nîgger",
    "nîgga",
    "nįgger",
    "gacha tards",
    "gacha tard",
    " coon",
    "https://cdn.discordapp.com/attachments/607602459183153172/655451140137156638/iphonesleeperagent.gif",
    "nigg",
    "kike",
    "niga",
    "nixxggxa",
    "gackatard",
    "gachatarad",
    "gackatarad",
    "chinc",
    "jap ",
    "japs ",
    "nogger",
    "retard",
    "grabify",
    "kekma",
    "$ cult"
];
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


const mediaNotAllowed = [
    "https://media.discordapp.net/attachments/",
    ".mp4",
    ".jpeg",
    ".png",
    ".jpg",
    ".webm",
    ".gif"
]
const verifyChannel = '632039703377608746';


// A pretty useful method to create a delay without blocking the whole script.
const wait = require('util').promisify(setTimeout);

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Ready!');
    const pickupChannel = client.channels.cache.get(channel);
    pickupChannel.send(message);
});

client.on('message', message => {

    let args = message.content.substring("z!".length).split(" ");
    // Args variable

    // Server verification
    // TODO: Rework the server verification, readablity is le dog shit
    if (message.channel.id == verifyChannel) {
        if (message.author.bot) return;
		if (allowedPhrases.includes(message.content)) {
			client.guilds.cache.get('590694100475576332').members.cache.get(message.author.id).roles.add('590694158734327839');
			message.author.send('You have gained access to the server!');
			message.delete();
		} else {
			message.delete();
			message.author.send(`Looks like the phrase you sent in <#${verifyChannel}> was incorrect. Did you ensure you typed it right?`);
		}
    }

    if (!message.content.startsWith(prefix) || message.author.bot) return;
    


    const command = args.shift().toLowerCase();

    if (! client.commands.has(command)) return;
    


    try {
        client.commands.get(command).execute(message, args, Discord);
    } catch (error) {
        console.error(error);
        message.reply('there was an error trying to execute that command!');
    }

    switch (args[0]) {
        case notAllowed: if (message.member.roles.cache.find(r => r.name === 'gex')) 
            message.channel.send("stfu")
            message.delete();
        break;

        case mediaNotAllowed: if (message.member.roles.cache.find(r => r.name === 'gex') || message.member.roles.cache.find(r => r.name === 'Ticket To Boosterland' && message.channel.id === "590695703353884674")) 
            message.channel.send("media links aren't allowed here, please go to <#638517981764255754>")
            message.delete();
        break;
    }
})

// Login with the bots token
client.login(token);
