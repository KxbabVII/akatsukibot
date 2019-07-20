const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let botIcon = bot.user.displayAvatarURL
let user = message.mentions.users.first()
message.delete()

let ErrorMentionUser = new Discord.RichEmbed()
.setColor("RANDOM")
.setDescription('Syntaxe : ?avatar @user :x:')

if(!user) return message.channel.send(ErrorMentionUser)

    let EmbedAvatarResult = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription(`Avatar de ${user.tag}`)
    .setImage(user.avatarURL)
    .setFooter(`Akatsuki | Commande avatar demandé par ${message.author.tag}`, botIcon)

    message.channel.send(EmbedAvatarResult)
}

module.exports.help = {
    name: "avatar"
};
