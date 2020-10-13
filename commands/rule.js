module.exports = {
	name: 'rule',
	description: 'rules giver',
	execute(message, args) {
        switch (args[0]) {
            case '1':
                message.channel.send('Rule 1: **Don\'t be annoying.** Don\'t act like a child. Control yourself. You can dislike Lunime/Gacha Life without babyraging at the sight of a cartoon character.');
                break;
            case '2':
                message.channel.send('Rule 2: **Leaving the server during your crypt sentence will result in a permanent ban. 3 strikes and you\'re out.** Each time you are crypted, 1 strike is added to your account. Once you receive your 3rd strike, you will be permanently banned. You can appeal crypts by DMing <@738765589748645908>.');
                break;
            case '3':
                message.channel.send('Rule 3: **Watch your fucking language.** We don\'t care how much you swear, but don\'t use slurs **of any kind**. And yes, "trap", "cracker", "retard" and variations of them are considered slurs. ("Trap" and "cracker" only count if in reference to people, of course.) We don\'t care if it\'s in songs you\'re playing/sharing, just don\'t say it in the server or share memes/images with slurs in them. Saying a slur will get you a day in the crypt, next time will get you a week, and then you\'re getting permanently banned as per our 3-strike system. Quoting someone else is also fine, unless you are using the quote with hateful intent.');
                break;
            case '4':
                message.channel.send('Rule 4: **No NSFW content of any kind.** The "nsfw-cringeposting" channel allows it, as long as it\'s cringe. If you post NSFW accidentally, it will be deleted and you will be warned. If you seem to be doing it intentionally, you\'re going in the crypt for a week per each image/video posted. If you disclose that you are under 18 in the server, you will be given a role that bans you from seeing #nsfw-cringeposting.');
                break;
            case '5':
                message.channel.send('Rule 5: **No racism, homophobia, endorsement of ||pedophilia|| or terrorism, or other hate speech is allowed whatsoever.** We have a **ZERO-TOLERANCE POLICY** for these things. Violating this rule will result in an immediate permanent ban.');
                break;
            case '6':
                message.channel.send('Rule 6: **Moderators\' discretion.** If a mod decides your behavior is unacceptable but your bad behavior is not something listed in the rules, then they have full rights to decide a punishment for you after consulting with the mod team.');
                break;
            case '7':
                message.channel.send('Rule 7: **Don\'t randomly ping roles or people for no reason.** Attempting to mention @.everyone or @.here will do nothing since server members are disabled from pinging them, and you will be sentenced to the crypt for 12 hours. However, please do feel free to ping the Antediluvian Gods or High Priests if you have a problem that requires mod intervention!');
                break;
            case '8':
                message.channel.send('Rule 8: **No spam allowed whatsoever.** Spam will result in a delete and warn, and a crypt sentence if continued.');
                break;
            case '9':
                message.channel.send('Rule 9: Please speak English at all times! Non-English messages are subject to deletion.\n\n Esta es una comunidad solo en inglés.\nこれは英語のみのコミュニティです。\nNous sommes une communauté seulemente anglais.\n Questa è una comunità solo inglese.');
                break;
            case '10':
                message.channel.send('Rule 10: **Please avoid talking about triggering topics.** If someone tells you that a specific topic or word makes them feel uncomfortable or is a "trigger word" for them, please either **avoid talking about that thing** or **spoiler all discussion about it**.');
                break;
            case '11':
                message.channel.send('Rule 11: **Please censor all personally identifiable info from images and text.** This includes usernames, YouTube or other social media links, etc. Violating this rule will result in a deletion and warn. Repeat violations will result in a 1-day crypt sentence for each link/uncensored username posted. Attempting to dox or raid someone will get you permanently banned. Please censor YouTube video titles as well. This rule doesn\'t apply for content not being posted in a "cringy" context.');
                break;
            case '12':
                message.channel.send('Rule 12: **Please keep bot commands in <#620789282226962464>**. Otherwise, your message will be deleted. Repeat violation will result in warns, and *repeat repeat* violation will result in a 1-day crypt sentence.');
                break;
            case '13':
                message.channel.send('Rule 13: **Posting beastiality or gore is an instant deletion of your message(s) and permanent ban.** Brutal Gacha gore such as "Gacha murder videos" will not result in a ban but instead in a deletion of your message(s) and a 5 day crypt sentence, unless you censor and spoiler the media. We also will not delete/crypt if it\'s not brutal or realistic. A low quality transparent-red colour splattered on a Gacha character isn\'t really gore. Your gory art/"vent art" is allowed in the server, as long as you spoiler it and provide a gore warning.');
                break;
            case '14':
                message.channel.send('Rule 14: **YOU MUST BE 13 YEARS OF AGE OR OLDER TO USE THIS SERVER.** If you disclose that you are under 13, you will be immediately banned from the server. This is to strictly comply with Discord\'s Terms Of Service and COPPA laws.');
                break;
            case '15':
                message.channel.send('Rule 15: **Politics are strictly banned from the server.** Since discussion about politics almost always results in toxicity, politics are banned from the server as a whole. Of course it\'s OK to quote someone or make an offhanded comment, but please don\'t try to start discussions or arguments relating to politics. Keep talk about political/racist/hateful groups out of this server.');
                break;
            case '16':
                message.channel.send('Rule 16: **Don\'t name yourself stupid things.** "Everyone", "Here", "Several people", zalgo text, an empty name, a name which we can\'t easily mention, or other things of the like are strictly banned. Don\'t put symbols at the front of your name to boost yourself to the top of the member list either. This will result in a potentially humiliating nickname change if found.');
                break;
            case '17':
                message.channel.send('Rule 17: **No bright flashing media of any kind, including emotes.** If you decide to post any, please spoiler them and preface them with an epilepsy warning.');
                break;
            case '18':
                message.channel.send('Rule 18: **No Gacha edits.** If they\'re something you\'re posting as cringe (and you didn\'t make it), it\'s fine. However, posting Gacha edits as art or self-promotion is not allowed. Sorry, but this really isn\'t the place for that. Violating this rule will result in a message deletion and possible warn. Repeatedly advertising your Gacha creations will result in a crypt sentence or ban.');
                break;
            case '19':
                message.channel.send('Rule 19: **Keep conversation civil and appropriate.** If you\'re going to joke around, try to actually be funny. Sex jokes, poop jokes, fetish jokes, etc. are not funny and make some people uncomfortable. Posting them will result in a delete and warn. 3 warns will result in a 1-day crypt sentence. You are given permission to post these kinds of jokes in #unfunny-garbage.');
                break;
            case '20':
                message.channel.send('Rule 20: **No edgy, dark or offensive jokes or memes.** Edgy and offensive jokes are strictly BANNED. This includes, but is not limited to, any jokes or memes related to ||killing, cannibalism, dead bodies, pedophilia, child pornography, self-harm, suicide, rape/sexual assault, diseases, or other controversial topics such as abortion, terrorism or religion||. Anyone who breaks this rule will receive either a 5-day crypt sentence or a permanent ban depending on how offensive their message was.');
                break;
            case '21':
                message.channel.send('Rule 21: **Please do not say threats or considerations of ||self-harm|| or ||suicide|| in the server.** If you do or say these things, we will direct you to a variety of professional help resources and kindly ask you to stop. This is for the good of the server and yourself. None of us are professionals. Venting and debate is still very much allowed in <#728976388094296115>, but we request that you contact professionals if you need urgent help, instead of asking us for help.');
                break;
            case '22':
                message.channel.send('Rule 22: **Anything that violates Discord TOS will get you immediately banned.** This is obvious. Anything we\'ve forgotten to list here that violates Discord\'s Terms Of Service is automatically banned in this server. Things like links to pirated content will be deleted and can get you banned.');
                break;
            case '23':
                message.channel.send('Rule 23: **Do not sexualize/ship any of the moderators, or any members of the server for that matter.** This is bizarrely common - so common, it has become its own rule. Do not sexualize us! This includes jokes about Rule 34 of mods or "Mod x Mod"! Most of us are minors! Many of the server members are also minors! It\'s creepy, just don\'t do it! Breaking this rule will get you crypted for a long time, or permanently banned. If you for some reason really want to ship members of the server, make sure they are over 18 and you have gotten their explicit consent to do so.');
                break;
        }
	},
};