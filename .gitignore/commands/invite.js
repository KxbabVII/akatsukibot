const Discord = require ("discord.js");

module.exports.run = async (bot, message, args) => {
        return message.channel.send("Lien du serveur support : https://discord.gg/4gfWGEj\nLien d'invitation du BOT : https://discordapp.com/oauth2/authorize?client_id=573126775673061377&scope=bot&permissions=8")
  }

module.exports.help = {
    name: "invite"
};

