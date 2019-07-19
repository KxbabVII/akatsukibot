const Discord = require ("discord.js");

module.exports.run = async (bot, message, args) => {
    let botIcon = bot.user.displayAvatarURL
    let reportUser = message.guild.member (
        message.mentions.users.first() || message.guild.members.get(args[0])
    );

    if (!reportUser) {
        let reportUserEmbed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription("L'utilisateur est inexistant. Veuillez reesayer | Syntaxe : ?report @user#0000")

        return message.channel.send(reportUserEmbed)

    }
    
    let reportReason= args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
    .setDescription('**Report**')
    .setColor("RANDOM")
    .addField('Utilisateur reporté :', `${reportUser} (ID : ${reportUser.id})`)
    .addField("Salon :", message.channel)
    .addField("Raison :", reportReason)
    .setFooter(`Akatsuki | Commande report demandé par ${message.author.tag}`, botIcon);

    let reportChannel = message.guild.channels.find(x => x.name === "「🖥」report"); 
    if (!reportChannel) {
        let reportChannelEmbed = new Discord.RichEmbed
        .setDescription("Erreur : Le salon 「🖥」report n'a pas été trouvé sur le serveur. Veuillez le creer. ")
        .setColor("RANDOM")
        return message.channel.send(reportChannelEmbed)

    }

        message.delete();
        reportChannel.send(reportEmbed);

        console.log("Commande report exécuté par", message.author.username, "sur le serveur", message.guild.name);
    }

module.exports.help = {
     name: "report"
};