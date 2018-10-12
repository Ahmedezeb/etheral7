const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
//let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);

let rMember = message.mentions.members.first();
let botmessage = args.join(" ").slice(22)
rMember.send(botmessage);
console.log(`Messaged ${rMember.user.username} : ${botmessage}`);

if (message.content.startsWith(config.prefix)) return message.channel.send(":x: Please use commands in real server! :x:") //if the message is a command
  message.channel.send("This message has been sent :incoming_envelope:");
  if (message.content.startsWith(config.prefix)) return
  if (botmessage.length > 256) return message.reply("Your message content too many characters :/") //if the message contnt more than 256 character, what fields do not allow
  var embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setTitle("Send")
      .setDescription(`Message to ${rMember.user.username}`)
      .addField(botmessage, "Send by: " + message.author.username + " with the ID: " + message.author.id)
      .setTimestamp()
  bot.guilds.get("472174636839469088").channels.get("500430737275879465").send(embed) //send the embed in a specific channel
}

message.delete().catch(O_o=>{});
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['DM','dm'],
  permLevel: 2
}
module.exports.help = {
  name: 'DM',
  description: 'Direct Message someone anonymously.(Doesn\'t record replies)',
  usage: 'dm [mention] [message]'
}