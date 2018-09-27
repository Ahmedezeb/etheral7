exports.run = (client, message) => {
const embed = {
  "image": {
    "url": "https://cdn.discordapp.com/embed/avatars/0.png"
  }
};

if (message.channel.nsfw == false){
        return message.reply('due to We Out Here\'s rules, sexpositions can only be used in NSFW channels, as the content of the command may not be appreciate for all ages.');
    }

channel.send("*I'd recommend these*:ok_hand:", { embed })

}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['sex'],
    permLevel: 0
  }
  module.exports.help = {
    name: 'sexpositions',
    description: 'Try something new!',
    usage: 'sexpositions'
  }