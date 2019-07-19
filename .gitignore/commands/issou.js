const Discord = require ("discord.js");

module.exports.run = async (bot, message, args) => {
    let botIcon = bot.user.displayAvatarURL;
    let issouEmbed = new Discord.RichEmbed()
        .setDescription("**Issou**")
        .setImage("https://cdn.discordapp.com/attachments/580118929758748682/596662722620424192/image0.png")
        .setColor("RANDOM")
        .setFooter(`Akatsuki | Commande issou demandé par ${message.author.tag}`, botIcon);

        return message.channel.send(issouEmbed)
        
  }

module.exports.help = {
    name: "issou"
};