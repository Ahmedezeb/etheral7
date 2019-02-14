const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	let application = args.join(" ");
	if(!application) return message.channel.send("You Must Send Your Application");
	
    let applicationEmbed = new Discord.RichEmbed()
    .setColor("#ff69b4")
    .addField("Applicant", `${message.author}`)
    .addField("Application", application)
	.setFooter(message.createdAt);

    let applicationschannel = message.guild.channels.find(`name`, "applications-log");
    if(!applicationschannel) return message.channel.send("Couldn't find applications-log channel.");


    message.delete().catch(O_o=>{});
    applicationschannel.send(applicationEmbed);
    applicationschannel.send('If you think the application should be accepted react with :white_check_mark:\nIf you think the application should be rejected react with :negative_squared_cross_mark:')
};

 exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['Submit'],
  permLevel: 0
};
module.exports.help = {
  name: "submit",
  description: 'Submit your application',
  usage: 'submit [application]'
}
