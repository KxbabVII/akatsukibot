const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let botIcon = bot.user.displayAvatarURL
    let askErrorEmbed = new Discord.RichEmbed()
   .setDescription("Veuillez poser une question. | Syntaxe : ?8ball question")
   .setColor("RANDOM")
    if (!args[0]) return message.reply(askErrorEmbed)

    let replies = ["oui.", "non.", "certainement.", "jaaj.", "pourquoi pas.", "tais toi.", "flemme de te répondre.", "hé oui Jamy !", "tu veux du pâté ?", "certainement.", "bien vu.", "pour ne pas te lacher un nique ta mère.", "je ne sais pas.",
    "sans pression.", "tu dis que de la merde.", "tu pue.", "sah quel plaisir.", "couillon va.", "jvounike"]
    let question = args.slice(0).join(" ");
    let res = Math.floor((Math.random() * replies.length));

    let askEmbed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setFooter(`Akatsuki | Commande 8ball demandé par ${message.author.tag}`, botIcon)
    .setAuthor(`Question posé : ${question}`)
    .setDescription(`Réponse du bot : ${replies[res]}`);
    message.channel.send(askEmbed)

}          


module.exports.help = {
    name: '8ball'
};
