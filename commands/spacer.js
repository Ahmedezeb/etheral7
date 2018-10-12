exports.run = (client, message) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.reply("You're not authorized to use this command: MANAGE_MESSAGES");
      
  message.channel.send(`NEW PARTNER`)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['Spacer','s'],
  permLevel: 0
};

exports.help = {
  name: 'spacer',
  description: 'spacer',
  usage: 'spacer'
};