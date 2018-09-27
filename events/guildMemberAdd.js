const chalk = require('chalk');

const chalkInfo = chalk.bgBlue.white;
const chalkWarn = chalk.bgRed.white;

module.exports = (member, client, config) => {
    const channel = member.guild.channels.find('name', 'welcome');
    const embed = {
        "title": "Welcome ${member.user.username} to We Out Here!",
        "description": "\nWassup ${member.user.username}:v: This is **OUR** discord, and it is targeted toward chilled-out people. We are always trying to create a fun + relaxed environment with many ways for members to socialize and enjoy themselves!\n\n",
        "color": 1,
        "timestamp": new Date(),
        "footer": {
          "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png",
          "text": "Are you here to expand your mind?"
        },
        "thumbnail": {
          "url": "https://media.giphy.com/media/gXl6UrZOUXNW8/giphy.gif"
        },
        "image": {
          "url": "https://cdn.discordapp.com/attachments/494751952480108546/494754138563936266/bannerweouthere.png"
        },
        "author": {
          "name": member.user.username,
          "icon_url": member.user.avatarURL
        },
        "fields": [
          {
            "name": "Where should you get started?",
            "value": "Start by saying hi in #general, you are bound to make a quick friend there."
          },
          {
            "name": "How do I use the bots?",
            "value": "On each designated channel, there will be a list of commands either pined in the chat, or set in the description."
          },
          {
            "name": "How do I apply for staff?",
            "value": "If you actually plan to apply just go to #application-format, then fill out the formated application(*it doesn't need to be lengthy*). Once you are finished, go to #applications-submit, there you will need to type `.submit [paste application]`\nOnce you have submitted your application it will go under review, after the decision is made a Adminstrator will DM you\n"
          },
          {
            "name": "Enjoy Your Stay!",
            "value": ":chill:",
            "inline": true
          }
        ]
      };

    if (!channel){
        channel = guild.channels.get('472175445849276416');
    }
    else{
        channel.send({ embed });
    }
}