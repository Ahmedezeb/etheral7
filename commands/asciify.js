var figlet = require('figlet');

exports.run = (client, message, args, tools) => {
  
  var maxLen = 20 // You can modify the max characters here
  
  if(args.join(' ').length > maxLen) return message.channel.send('Only 20 characters admitted!') 
  
  if(!args[0]) return message.channel.send('Please specify a test to asciify!');
  
  figlet(`${args.join(' ')}`, function(err, data) {
      if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
      }

      message.channel.send(`${data}`, {code: 'AsciiArt'});
  });


}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["Asciify"],
    permLevel: 0
};

exports.help = {
    name: "Asciify",   
    description: "Ooh fancy",
    usage: "Asciify"
};