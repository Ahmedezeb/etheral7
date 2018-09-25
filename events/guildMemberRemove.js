module.exports = member => {
    let guild = member.guild;
    guild.channels.get('472191923856343071').send(`${member.user.username} was beamed up ${member.user.tag}`);
};