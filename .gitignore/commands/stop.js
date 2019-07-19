const Discord = require ("discord.js")

module.exports.run = async (bot, message, args) => {

    let voiceEmbed = new Discord.RichEmbed()
    .setDescription("Veuillez vous connecter à un salon vocal.")
    .setColor("RANDOM")
    if (!message.member.voiceChannel) return message.channel.send(voiceEmbed)
    let ConnectedEmbed = new Discord.RichEmbed()
    .setDescription("Le bot n'est pas connecté dans un salon vocal.")
    .setColor("RANDOM")
    if (!message.guild.me.voiceChannel) return message.channel.send(ConnectedEmbed)
    if (message.guild.me.voiceChannelID == message.member.voiceChannelID)
    message.guild.me.voiceChannel.leave();
    let leaveEmbed = new Discord.RichEmbed()
    .setDescription("Le bot a été déconnecté du vocal avec succès !")
    .setColor("RANDOM")
    message.channel.send(leaveEmbed)
    message.channel.delete

}

module.exports.help = {
    name: "stop"
};