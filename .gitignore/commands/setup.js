const Discord = require ("discord.js");

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("ADMINISTRATOR"))
    let errorPermSetup = new Discord.RichEmbed()
    .setDescription("Vous n'avez pas la permission d'utiliser cette commande.")
    .setColor("RANDOM")
     message.reply(errorPermSetup)

     message.guild.createChannel('「🖥」report',"text")
     message.guild.createChannel('「📔」logs-akatsuki',"text")
     
     let setupEmbed = new Discord.RichEmbed()
     .setDescription("Installation du setup de Akatsuki finie avec succès.")
     .setColor("RANDOM")

     message.channel.send(setupEmbed)

}

module.exports.help = {
    name: "setup"
};
