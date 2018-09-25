module.exports = member => {
  const guild = member.guild;
  guild.defaultChannel.sendMessage(`${member.user.username} was beamed up`);
};
