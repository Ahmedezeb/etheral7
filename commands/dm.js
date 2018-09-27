const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
//let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);

let rMember = message.mentions.members.first();
let botmessage = args.join(" ").slice(22)
rMember.send(botmessage);
console.log(`Messaged ${rMember.user.username} the Message ${botmessage}`);

message.delete().catch(O_o=>{});
  }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['DM'],
  permLevel: 2
}
module.exports.help = {
  name: 'DM',
  description: 'Direct Message someone anonymously.(Doesn\'t record replies)',
  usage: 'dm [mention] [message]'
}