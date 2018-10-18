const Discord = require('discord.js')
const superagent = require('superagent');

const run = module.exports.run = async (client, msg, args) => {
  let{body} = await superagent
  .get(`https://api-to.get-a.life/meme`);

  let me = new Discord.RichEmbed() 
  .setColor("#7289DA")
  .setFooter(`${message.author}`)
  .setImage(body.url);

  msg.channel.send(me);
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