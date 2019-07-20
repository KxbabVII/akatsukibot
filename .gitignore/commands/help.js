const Discord = require ("discord.js");

module.exports.run = async (bot, message, args) => {
    let botIcon = bot.user.displayAvatarURL;
    let helpEmbed = new Discord.RichEmbed()
        .setTitle("**Page d'aide**")
        .setDescription("Version 1.4 | Prefix : ?")
        .setAuthor("Akatsuki")
        .setColor("RANDOM")
        .addBlankField()
        .addField('**Commandes de modération :**', 'ban, kick, mute, unmute, report,\nclear, purge, warn, setup,\nannonce, sondage, sayembed')
        .addField('**Commandes fun :**', 'everyone, avatar, 8ball, say, level, jvounike, issou, tv,\nplay, stop, rousseau')
        .addField('**Commandes informations:**', 'serverinfo, info, userinfo, membercount, serverowner,\ninvite, ping, aide, cmdinfo')
        .addBlankField()
        .setFooter(`Akatsuki | Commande help demandé par ${message.author.tag}`, botIcon)

        return message.channel.send(helpEmbed)
        
  }

module.exports.help = {
    name: "help"
};
