const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You clearly don\'t have permission for that");
  let botmessage = args.join(" ");
  message.delete().catch();
  message.channel.send(botmessage);
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['Say'],
  permLevel: 0
}
module.exports.help = {
  name: 'say',
  description: 'Say a message',
  usage: 'say [message]'
}
