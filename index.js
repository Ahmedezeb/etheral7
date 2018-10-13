const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
const Fortnite = require('fortnite');
const https = require('https');
const figlet = require('figlet');
require('./util/eventLoader')(client);

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
  
};

client.on('ready', () => {
    client.user.setActivity('Type .help', {type: 'WATCHING'});
});

client.on('messageDelete', async (message) => {
  const logs = message.guild.channels.find('name', 'deletion-logs');
  if (message.guild.me.hasPermission('MANAGE_CHANNELS') && !logs) {
      await message.guild.createChannel('logs', 'deletion-logs');
  }
  if (!logs) {
      return console.log('The logs channel does not exist and cannot be created')
  }
  const entry = await message.guild.fetchAuditLogs({
      type: 'MESSAGE_DELETE'
  }).then(audit => audit.entries.first())
  let user;
  if (entry.extra.channel.id === message.channel.id && (entry.target.id === message.author.id) && (entry.createdTimestamp > (Date.now() - 5000)) && (entry.extra.count >= 1)) {
      user = entry.executor.username
  } else {
      user = message.author
  }
  const logembed = new Discord.RichEmbed()
      //.setTitle('Message Deleted')
      .setAuthor(user.tag, message.author.displayAvatarURL)
      .addField(`**Deleted in ${message.channel.name}**\n\n`, message.content)
      .setColor(message.guild.member(client.user).displayHexColor)
      .setFooter(`<#${message.channel.id}>`)
      .setTimestamp()
  //console.log(entry)
  logs.send(logembed);
});

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./commands/', (err, files) => {
  if (err) console.error(err);
  log(`Loading a total of ${files.length} commands.`);
  files.forEach(f => {
    const props = require(`./commands/${f}`);
    log(`Loading Command: ${props.help.name}. 👌`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./commands/${command}`)];
      const cmd = require(`./commands/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.elevation = message => {
  /* This function should resolve to an ELEVATION level which
     is then sent to the command handler for verification*/
  let permlvl = 0;
  const mod_role = message.guild.roles.find('name', config.modrolename);
  if (mod_role && message.member.roles.has(mod_role.id)) permlvl = 2;
  const admin_role = message.guild.roles.find('name', config.adminrolename);
  if (admin_role && message.member.roles.has(admin_role.id)) permlvl = 3;
  if (message.author.id === config.ownerid) permlvl = 4;
  return permlvl;
};



var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(process.env.TOKEN);
