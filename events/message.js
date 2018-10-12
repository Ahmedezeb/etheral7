const config = require('../config.json');
module.exports = message => {
  const client = message.client;
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;
  const command = message.content.split(' ')[0].slice(config.prefix.length);
  const params = message.content.split(' ').slice(1);
  const perms = client.elevation(message);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {
    if (perms < cmd.conf.permLevel) return;
    cmd.run(client, message, params, perms);
  }

  if (message.channel.type === "dm") { //if the channel is a DM channel
    var args = message.content.split(" ").slice(0)
    var args = args.slice(0).join(" ") //create the args

    if (message.content.startsWith(prefix)) return message.channel.send(":x: Please use commands in real server! :x:") //if the message is a command
    message.channel.send("This message has been send to the staff! :incoming_envelope:");
    if (message.content.startsWith(prefix)) return
    if (args.length > 256) return message.reply("Your message content too many characters :/") //if the message contnt more than 256 character, what fields do not allow
    var embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle("New request in DM!")
        .addField(args, "Send by: " + message.author.username + " with the ID: " + message.author.id)
    bot.guilds.get("472174636839469088").channels.get("500430737275879465").send(embed) //send the embed in a specific channel
}


if (message.content.startsWith(prefix + "reply")) {
    if (message.author.id !== "YOUR_ID") return message.reply('You cannot use that!')
    var args = message.content.split(" ").slice(0)
    var Rargs = message.content.split(" ").slice(2).join(" ")
    var userID = args[1]
    if (isNaN(args[1])) return message.reply("This is not an ID!") //if args is Not A Number!
    var embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle("DM Log")
        .setDescription(Rargs)
        .setFooter("this message was sent to you by: " + message.author.username + " !")
    bot.users.get(userID).send(embed)
    message.channel.send("Send!").catch(console.error) //send the message
    //it may be that if the user has blocked your bot that it does not work
}

};
