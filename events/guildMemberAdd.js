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
            color: 0xffff00,
            author: {
            name: member.user.username,
            icon_url: member.user.avatarURL
            },
            thumbnail: {
            url: member.user.avatarURL
            },
            description: `Wassup ${member.user}:v:`.toString(),
            timestamp: new Date(),
            footer: {
            text: "Enjoy your stay at :alien:**We Out Here**:alien:"
            }
        }});
    }
}