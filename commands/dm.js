const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
//let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);

let rMember = message.mentions.members.first();
let botmessage = args.join(" ").slice(22)
rMember.send(botmessage);
console.log(`Messaged ${rMember.user.username} : ${botmessage}`);

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