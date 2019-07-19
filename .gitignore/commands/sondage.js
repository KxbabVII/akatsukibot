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
        .setDescription("Syntaxe : ?sondage question")
        .setColor('RANDOM')
        if (!args[0]) return message.channel.send(errorEmbed)

        let pollEmbed = new Discord.RichEmbed()
        .setTitle('**Sondage**')
        .setColor("RANDOM")
        .setFooter('Akatsuki | Veuillez répondre au sondage en cochant une des deux réaction', botIcon)
        .setDescription(args.join (' '));
        
        let msg = await message.channel.send(pollEmbed)
        await msg.react('✅')
        await msg.react('❌');
    
  };

module.exports.help = {
    name: "sondage"
};