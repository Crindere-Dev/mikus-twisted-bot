# Cringe Bot, Official Gacha Life Cringe Discord Bot
This is the source code for the official bot of the Gacha Life Cringe Discord! if you are invited here you must be special
### Creating new commands
This bot is very modular, every command is a nodejs module as you can see in dirrectory commands
the basic template for creating a command is
`commands/commandName.js`
```js
module.exports = {
	name: 'commandName',
	description: 'Desc. Of said command',
	execute(message, args, Discord, client ,version) {
		//code goes here
	},
};
```
every module is passed down **three** arguments, the message, arguments, and the Discord.js Library
this is made to make it easy to write commands for the bot
### Deployment (Ubuntu 20.04)

Deployment is quite easy, all you require is an ubuntu server, and it's architecture to be supported by node.js, here is how you deloy


#### Run these in terminal
1. curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
2. sudo apt install -y nodejs
3. sudo npm i -g pm2
4. mkdir /etc/cringebot/cringe-bot-v2/
5. chmod 777 /etc/cringebot/cringe-bot-v2/
6. cd /etc/cringebot/cringe-bot-v2/
7. git clone https://github.com/Able-Times/cringe-bot69420
8. cd cringe-bot69420
9. sudo pm2 start index.js
