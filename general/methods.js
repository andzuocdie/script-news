const Discord = require("discord.js");

exports.run = async (client, message, args) => {

const ayarlar = require('../ayarlar.json');
var room = ayarlar.commandroom;

if (message.channel.id != room) {
	return;
  }

// Example command
if(!args[0]) {
	const embed1 = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('💀 **𝐍𝐚𝐛𝐢𝐤𝐚 𝐀𝐭𝐭𝐚𝐜𝐤** 💀')
	.setDescription("**Layer 7** \n 
                            HTTP-CF
                            RAW
                            TLS
                            HTTP-MIX
                            HTTP-GOV
                            HTTPS-BYPASSv2
                            SIEUCAP")
	message.channel.send(embed1);
	return;
	}

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['methods'],
  permLevel: 0
}

exports.help = {
  name: 'methods',
  description: '𝐍𝐚𝐛𝐢𝐤𝐚 𝐀𝐭𝐭𝐚𝐜𝐤',
  usage: 'methods'
}
