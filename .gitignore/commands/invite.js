const Discord = require ("discord.js");

module.exports.run = async (bot, message, args) => {
    let botIcon = bot.user.displayAvatarURL;
    let inviteEmbed = new Discord.RichEmbed()
        .addField("Lien du serveur support : https://discord.gg/4gfWGEj", "nLien d'invitation du BOT : https://discordapp.com/oauth2/authorize?client_id=573126775673061377&scope=bot&permissions=8"")
        .setColor("RANDOM")
        .addBlankField()
        .addBlankField()
        .setFooter(`Akatsuki | Commande invite demandé par ${message.author.tag}`, botIcon)
        .setThumbnail(`${message.author.avatarURL}`);

        return message.channel.send(inviteEmbed)
        
  }

module.exports.help = {
    name: "invite"
};
