const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let botIcon = bot.user.displayAvatarURL;
  let infoembed = new Discord.RichEmbed()
    .setDescription("Informations sur le bot")
    .setColor("#dc143c")
    .setThumbnail(botIcon)
    .addField("Nom du bot :", bot.user.username)
    .addField("Commandes :", "28")
    .addField('Librairies :', 'discord.js, fs, ytdl-core')
    .addField('Discord de support :', "https://discord.gg/4gfWGEj")
    .setFooter(`Akatsuki | Commande info demandé par ${message.author.tag}`, botIcon);
  return message.channel.send(infoembed);
  
  console.log("Commande info exécuté par", message.author.username, "sur le serveur", message.guild.name);
};

module.exports.help = {
  name: "info"
};
