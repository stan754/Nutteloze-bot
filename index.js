const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json')

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
  // Here is where you need to code
  if(message.content.toLowerCase().startsWith(`${config.prefix}`)){
		message.channel.send('Dit kan ik helaas nog niet!')
	}
});

client.login(config.token);