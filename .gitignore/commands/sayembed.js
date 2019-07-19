const Discord = require ("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) {
    var sayPermissionEmbed = new Discord.RichEmbed()
    .setDescription("Vous n'avez pas la permission d'utiliser cette commande ! (Permission MANAGE_MESSAGES requise)")
    .setColor("RANDOM")
    message.channel.send(sayPermissionEmbed)

  }

    let say = args.join(" ");
    message.delete().catch();

    let sayEmbed = new Discord.RichEmbed()
    .setDescription(say)
    .setColor("RANDOM")
    message.channel.send(sayEmbed)
  }

module.exports.help = {
    name: "sayembed"
};