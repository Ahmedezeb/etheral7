const Discord = require('discord.js');
module.exports.run = (client, message) => {
  let guild = message.guild;
  let afkTimeout = `${guild.afkTimeout}` / 60 + ` mins`;
  const embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setImage(guild.iconURL)
  .addField('Info for', `**Member count**\n${guild.memberCount}\n**Region**\n${guild.region}\n**Owner**\n${guild.owner}\n**Explicit Filter Level**\n${guild.explicitContentFilter}\n**Guild ID**\n${guild.id}`, inline=true)
  .addField(`${guild}`, `**Default Channel**\n${guild.defaultChannel}\n**AFK Channel**\n${guild.afkChannel}\n**AFK Timeout**\n${afkTimeout}\n**Verification Level**\n${guild.verificationLevel}\n**Created At**\n${guild.createdAt}`, inline=true)
  .setFooter('Invite your friends > https://discord.gg/reFzBd2')
  message.channel.send({embed})
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "serverinfo",
  description: "Releases information about We Out Here.",
  usage: "serverinfo"
};