const Discord = require ("discord.js");

module.exports.run = async (bot, message, args) => {
    let botIcon = bot.user.displayAvatarURL
    let serverIcon = message.guild.iconURL
    let serverinfoembed = new Discord.RichEmbed()
    .setDescription('Infomations sur le serveur')
    .setColor('RANDOM')
    .setThumbnail(serverIcon)
    .addBlankField()
    .addField('Nom du serveur :', message.guild.name)
    .addField('Nombre de membre :', message.guild.memberCount)
    .addField('Propriétaire du serveur :', message.guild.owner)
    .addField('Serveur crée le :', message.guild.createdAt)
    .addField('Vous avez rejoint le serveur le :', message.member.joinedAt)
    .addField('Nombre de rôles au total :', message.guild.roles.size)
    .addField('Nombre de salons au total :', message.guild.channels.size)    
    .addField('ID du serveur :', message.guild.id)
    .addBlankField()
    .setFooter(`Akatsuki | Commande serverinfo demandé par ${message.author.tag}`, botIcon);

    return message.channel.send(serverinfoembed)
    console.log("Commande serverinfo exécuté par", message.author.username, "sur le serveur", message.guild.name);
    
}
    module.exports.help = {
        name: "serverinfo"
    };