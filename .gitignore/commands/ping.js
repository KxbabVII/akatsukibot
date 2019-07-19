const Discord = require ("discord.js");

module.exports.run = async (bot, message, args) => {

let botIcon = bot.user.displayAvatarURL

let ping = new Discord.RichEmbed()
.setColor("RANDOM")
.setDescription('**Mon ping est de : ' + Math.round(bot.ping) + ' ms !**')
.setFooter(`Akatsuki | Commande ping demandé par ${message.author.tag}`, botIcon);

message.channel.send(ping)

console.log("Commande ping exécuté")    

}    

module.exports.help = {
    name: "ping"
};