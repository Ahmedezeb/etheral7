const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async(bot, message, args) => {
    
    let {body} = await superagent
    .get(`https://nekos.life/api/v2/img/Random_hentai_gif`);

    if (message.channel.nsfw == false){
        return message.reply('due to We Out Here\'s rules, hentai can only be used in NSFW channels, as the content of the command may not be appropriate for all ages.');
  }
    let hentaiEmbed = new Discord.RichEmbed()
    .setColor("#b70000")
    .setTitle("For all you horny weebs")
    .setImage(body.url);

    message.channel.send(hentaiEmbed);

}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['Hentai'],
    permLevel: 0
  };
  module.exports.help = {
    name: "hentai",
    description: 'Make for horny weebs.',
    usage: 'hentai'
  };