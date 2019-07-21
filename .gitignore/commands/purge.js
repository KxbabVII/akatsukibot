const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

if (message.deletable) message.delete();

    message.channel.fetchMessages().then((message) => message.forEach(m => m.delete()));

    let purgeEmbed = new Discord.RichEmbed()
    .setDescription("Tout les messages du salon sont en cours de suppression.")
    .setColor("RANDOM")

    message.channel.send(purgeEmbed)

}

module.exports.help = {
    name: "purge"
};
