const Discord = require("discord.js")
const config = require("../config.json")
const Fortnite = require("fortnite")
const ft = new Fortnite("a6bdbd27-0573-4e8a-9ff4-9b1d73af32b2")

module.exports.run = async (bot, message, arg) => {

	//.fortnite imLively pc
	let username = args[0];
	let platform = args[1] || "pc";
	
	let data = ft.getInfo(username, platform).then(data => {
	
		let stats = data.lifetimeStats;
		let kills = stats.find(s => s.stats == 'kills');
		let wins = stats.find(s => s.stats == 'wins');
		let kd = stats.find(s => s.stats == 'kd');
		let mPlayed = stats.find(s => s.stats == 'matchesPlayed');
		let tPlayed = stats.find(s => s.stats == 'timePlayed');
		let asTime = stats.find(s => s.stats == 'avgSurvivalTime');
		
		let embed = new Discord.RichEmbed()
		.setTitle("Fortnite Stats")
		.setAuthor(data.username)
		.setcolor(config.purple)
		.addField("Kills", kills.value, true)
		.addField("Wins", wins.value, true)
		.addField("KD", kd.value, true)
		.addField("Matches Played", mPlayed.value, true)
		.addField("Time Played", tPlayed.value, true)
		.addField("Average Survival Time", asTime.value, true);
		
		message.channel.send(embed);
	
	}).catch(e => {
		console.log(e);
		message.channel.send("Couldn't find that username")
	});
	
	
}

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: [],
	permLevel: 0
  };
  
  exports.help = {
	name: 'fortnite',
	description: 'Gathers Fortnite Stats',
	usage: 'fortnite [username] [platform]'
  };