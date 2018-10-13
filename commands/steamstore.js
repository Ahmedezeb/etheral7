const Discord = require('discord.js')
var steam = require('steam-provider')
var provider = new steam.SteamProvider();

exports.run = (client, message, args) => {
    let game = args [0]
    let steampng = "https://cdn.discordapp.com/attachments/458004691402489856/470344660364034049/steam.png"
    if (! game) return message.reply ('Please Write a Game Name on Steam. Example: `.steamstore portal 2`')
    provider.search (game) .then (result => {
    provider.detail (result [0] .id, "unitedstates", "us"). then (results => {
        console.log (results)
     const embed = new Discord.RichEmbed()
    .setAuthor('Steam Store', steampng)
  .setColor("#36393F")
    .setTitle(result[0].name)
    .addField(`Game ID`, result[0].id)
    .setThumbnail(results.otherData.imageUrl)
    .addField('Types', results.genres)
    .addField('Price', `Nolmal Fiyat **${results.priceData.initialPrice}** TL
İndirimli Fiyat **${results.priceData.finalPrice}** TL`, true)
    .addField('Platforms', results.otherData.platforms, true)
    .addField('Metacritic Score', results.otherData.metacriticScore, true)
    .addField('Tags', results.otherData.features, true)
    .addField('Developers', results.otherData.developer, true)
    .addField('Publishers', results.otherData.publisher)
  .setColor("#36393F")
    
    message.channel.send(embed).catch(e => {
        console.log(e)
        message.reply('Hata Olustu Yada `' + game + '` Adlı Oyun Bulunamadı')
    })
})
})
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'steamstore',
  description: 'steamstore',
  usage: 'steamstore'
};