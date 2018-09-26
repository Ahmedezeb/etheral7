const chalk = require('chalk');

const chalkInfo = chalk.bgBlue.white;
const chalkWarn = chalk.bgRed.white;

module.exports = (member, client, config) => {
    const channel = member.guild.channels.find('name', 'welcome');
    if (!channel){
        channel = guild.channels.get('472175445849276416');
    }
    else{
        channel.send({embed: {
            color: RANDOM,
            author: {
            name: member.user.username,
            icon_url: member.user.avatarURL
            },
            thumbnail: {
            url: member.user.avatarURL
            },
            description: `Wassup ${member.user.username}:v:`.toString(),
            timestamp: new Date(),
            footer: {
            text: "Are you here to expand your mind?"
            }
        }});
    }
}