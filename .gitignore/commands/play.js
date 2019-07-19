const Discord = require ("discord.js");
const ytdl = require('ytdl-core');

module.exports.run = async (bot, message, args) => {
    //Vérif
    let voiceEmbed = new Discord.RichEmbed()
    .setDescription("Veuillez vous connecter à un salon vocal.")
    .setColor("RANDOM")

    if (!message.member.voiceChannel) return message.channel.send(voiceEmbed)

    let ConnectedEmbed = new Discord.RichEmbed()
    .setDescription("Le bot est déjà présent dans un salon vocal.")
    .setColor("RANDOM")

    if (message.guild.me.voiceChannel) return message.channel.send(ConnectedEmbed)

    let ytLinkEmbed = new Discord.RichEmbed()
    .setDescription("Veuillez indiquer un lien YouTube. | Syntaxe : ?play lien")
    .setColor("RANDOM")

    if (!args[0]) return message.channel.send(ytLinkEmbed)

    const validate = await ytdl.validateURL(args[0]);

    let invalideLinkEmbed = new Discord.RichEmbed()
    .setDescription("Le lien de cette musique est invalide.")
    .setColor("RANDOM")

    if (!validate) return message.channel.send(invalideLinkEmbed)

    //Cmd

    let info = await ytdl.getInfo(args[0]);
    let connexion  = await message.member.voiceChannel.join();
    let dispatcher = await connexion.playStream(ytdl(args[0], { filter: 'audioonly'}))
    let disconnect = await dispatcher.on('end', () => { message.guild.me.voiceChannel.leave()});


    let playedMusicEmbed = new Discord.RichEmbed()
    .setDescription(`Musique ajoutée : ${info.title}`)
    .setColor("RANDOM")

    message.channel.send(playedMusicEmbed)
};

module.exports.help = {
    name: "play"
};