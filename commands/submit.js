const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let submit = message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Couldn't find user.");
    let applicationEmbed = new Discord.RichEmbed()
    .setDescription("Applications")
    .setColor("#15f153")
    .addField("Applicant", `${message.author} with ID: ${message.author.id}`)
    .addField("Time", message.createdAt)
    .addField("Application", application);

    let applicationschannel = message.guild.channels.find(`name`, "applications");
    if(!applicationschannel) return message.channel.send("Couldn't find applications channel.");


    message.delete().catch(O_o=>{});
    applicationschannel.send(applicationEmbed);
    applicationschannel.send('<@&472179405687488541>')
};

 exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
module.exports.help = {
  name: "submit",
  description: 'Submit your application',
  usage: 'submit [application]'
}