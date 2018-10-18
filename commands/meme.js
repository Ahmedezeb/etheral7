const Discord = require('discord.js')
const superagent = require('superagent');

const run = module.exports.run = async (client, message, args) => {
  let{body} = await superagent
  .get(`https://api-to.get-a.life/meme`);

  let me = new Discord.RichEmbed() 
  .setColor("#7289DA")
  .setFooter(`Requested by ${message.author.username}`)
  .setImage(body.url);

  message.channel.send(me);
    }

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["MEME"],
    permLevel: 0
};

exports.help = {
    name: "meme",   
    description: "Hungry for memes?",
    usage: "meme"
};