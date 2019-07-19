const Discord = require ("discord.js");

module.exports.run = async (bot, message, args) => {

    let botIcon = bot.user.displayAvatarURL

    message.delete()

    if (!message.member.hasPermission('MANAGE_MESSAGES')) {
        let errorPollEmbed = new Discord.RichEmbed()
        .setDescription("Vous n'avez pas la permission d'exécuter cette commande.")
        .setColor("RANDOM")
        message.channel.send(errorPollEmbed)

    }

        let errorEmbed = new Discord.RichEmbed()
        .setDescription("Syntaxe : ?annonce texte")
        .setColor('RANDOM')
        if (!args[0]) return message.channel.send(errorEmbed)

        let pollEmbed = new Discord.RichEmbed()
        .setTitle('**Annonce**')
        .setColor("RANDOM")
        .setFooter(`Akatsuki | Commande annonce demandé par ${message.author.tag}`, botIcon)
        .setDescription(args.join (' '));
        
        let msg = await message.channel.send(pollEmbed)
        await msg.react('✅')
    
  };

module.exports.help = {
    name: "annonce"
};