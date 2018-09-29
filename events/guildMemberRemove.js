module.exports = member => {
    const embed = {
     "image": {
      "url": "https://cdn.discordapp.com/attachments/494751952480108546/495728458958110721/beam.gif"
    },
    };
    let guild = member.guild;
    guild.channels.get('495701993445130250').send(`**${member.user.tag}** was *beamed* up!`,{ embed });
};