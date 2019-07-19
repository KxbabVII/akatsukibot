const Discord = require ("discord.js");

module.exports.run = async (bot, message, args) => {
    let botIcon = bot.user.displayAvatarURL;
    let tvEmbed = new Discord.RichEmbed()
        .setDescription("**NUL MITROGLOU**")
        .setImage("https://cdn.discordapp.com/attachments/595155050704142337/597349965613760535/CalmBleakKitty-max-1mb.gif")
        .setColor("RANDOM")
        .setFooter(`Akatsuki | Commande tv demandé par ${message.author.tag}`, botIcon);

        return message.channel.send(tvEmbed)
        
  }

module.exports.help = {
    name: "tv"
};