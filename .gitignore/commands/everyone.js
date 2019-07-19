const Discord = require ("discord.js");

module.exports.run = async (bot, message, args) => {

let botIcon = bot.user.displayAvatarURL;
let everyone = new Discord.RichEmbed()
.setImage("https://cdn.discordapp.com/attachments/572879554398650369/586914793789849610/ColorfulWellgroomedBream-max-1mb.gif")
.setFooter(message.author.tag, message.author.avatarURL)
.addField(`QUI EST LE FDP QUI A ENCORE PING ?`, "NUL NUL NUL WOLA")
.setColor("RANDOM")
.setFooter(`Akatsuki | Commande everyone demandé par ${message.author.tag}`, botIcon);
message.channel.sendEmbed(everyone)
console.log("Commande everyone exécuté")

}

module.exports.help = {
    name: "everyone"
};