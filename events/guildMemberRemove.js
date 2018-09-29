module.exports = member => {
    const embed = {
     "image": {
      "url": "https://discordapp.com/channels/472174636839469088/494751952480108546/495728458958110727"
    },
    };
    let guild = member.guild;
    guild.channels.get('495701993445130250').send(`**${member.user.tag}** was *beamed* up!`,{ embed });
};