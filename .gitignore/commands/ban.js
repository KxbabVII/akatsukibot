    
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
let botIcon = bot.user.displayAvatarURL
let banUser = message.guild.member (
    message.mentions.users.first() || message.guild.members.get(args[0])
);

if (!banUser) {
    let banUserEmbed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription("L'utilisateur est inexistant. Veuillez reesayer | Syntaxe : ?ban @user#0000")

    return message.channel.send(banUserEmbed)

}

let banReason = args.join(" ").slice(22);
if(!message.member.hasPermission("BAN_MEMBERS")) {
    var banPermissionEmbed = new Discord.RichEmbed()
    .setDescription("Vous n'avez pas la permission d'utiliser cette commande ! (Permission BAN_MEMBERS requise)")
    .setColor("RANDOM")
    return message.channel.send(banPermissionEmbed)
}
if(banUser.hasPermission ("BAN_MEMBERS")) {
    var errorBanEmbed = new Discord.RichEmbed()
    .setDescription("Vous n'avez pas la permission de bannir cette personne !")
    .setColor("RANDOM")
    return message.channel.send(errorBanEmbed);
};

let banEmbed = new Discord.RichEmbed()
.setDescription('**Expulsion du serveur**')
.setColor("RANDOM")
.addField('Utilisateur kick :', `${banUser} (ID : ${banUser.id})`)
.addField("Raison :", banReason)
.setFooter(`Akatsuki | Commande kick demandé par ${message.author.tag}`, botIcon);

let banChannel = message.guild.channels.find(x => x.name === "「🖥」report"); 
if (!banChannel) {
    let banChannelEmbed = new Discord.RichEmbed
    .setDescription("Erreur : Le salon 「📔」logs-akatsuki n'a pas été trouvé sur le serveur. Veuillez le creer.")
    .setColor("RANDOM")
    return message.channel.send(banChannelEmbed)

};
    
    message.delete();
    message.guild.member(banUser).ban("Vous avez été banni du serveur", message.guild.name, "pour", banReason);
    banChannel.send(banEmbed);

    console.log("Commande ban exécuté par", message.author.username, "sur le serveur", message.guild.name);
};

module.exports.help = {
    name: "ban"
  };