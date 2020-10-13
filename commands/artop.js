module.exports = {
	name: 'artop',
	description: 'ask reddit topic generator',
	execute(message, args, Discord, client ,version) {
        const fetch = require("node-fetch");

        fetch("https://api.reddit.com/r/reddevils/top.json?sort=top&t=day&limit=1")
            .then(response => response.json())
            .then(response => {
                message.channel.send(response.data.children[0].data.title);
            });
	},
};