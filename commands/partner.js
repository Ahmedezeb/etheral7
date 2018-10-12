const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if(!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.reply("You're not authorized to use this command: MANAGE_MESSAGES");

      const sayMessage = args.join(" ");

      let logEmbed = new Discord.RichEmbed()
      .setTitle("Partners-Log")
      .setColor("#0537ff")
      .setDescription(`${sayMessage}`)
      .setTimestamp()
      .setFooter(`Advertised by: ${message.author}`);

      const esayMessage = args.join(" ");
      // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
      message.delete().catch(O_o=>{});
      // And we get the bot to say the thing:

      let partnerschannel = message.guild.channels.find(`name`, "partners");
      if(!partnerschannel) return message.channel.send("Couldn't find partners channel.");

      partnerschannel.send(sayMessage);

      let logChannel = message.guild.channels.find(`name`, "partner-log");
      if(!logChannel) return message.channel.send("Can't find logs channel.");

      logChannel.send(logEmbed)

        return;
  }
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['Partner','p'],
  permLevel: 0
};

exports.help = {
  name: 'partner',
  description: 'Sends ads',
  usage: 'p [ad]'
};