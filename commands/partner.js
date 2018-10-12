const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
const PartnerManager = client.guilds.get(message.guild.id).roles.find('name', 'Partner Managers');

    if (message.guild.member(user).roles.has(PartnerManager.id)) 
      return message.reply("You're not authorized to use this command: PARTNER MANAGE");

      const sayMessage = args.join(" ");

      let logEmbed = new Discord.RichEmbed()
      .setTitle("Partners-Log")
      .setColor("#0537ff")
      .setDescription(`Said by ${message.author}`)
      .addField("Ad", `${sayMessage}`)
      .setTimestamp();

      const sayMessage = args.join(" ");
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