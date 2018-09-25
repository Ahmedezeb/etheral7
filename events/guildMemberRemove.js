module.exports = member => {
  const guild = member.guild;
  Guild.defaultChannel.send(`${member.user.username} was beamed up`);
};
