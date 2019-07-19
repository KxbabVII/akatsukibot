const Discord = require ("discord.js");

module.exports.run = async (bot, message, args) => {
    let botIcon = bot.user.displayAvatarURL
    let kickUser = message.guild.member (
        message.mentions.users.first() || message.guild.members.get(args[0])
    );

    if (!kickUser) {
        let kickUserEmbed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription("L'utilisateur est inexistant. Veuillez reesayer | Syntaxe : ?kick @user#0000")

        return message.channel.send(kickUserEmbed)

    }
    
    let kickReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("KICK_MEMBERS")) {
        var kickPermissionEmbed = new Discord.RichEmbed()
        .setDescription("Vous n'avez pas la permission d'utiliser cette commande ! (Permission KICK_MEMBERS requise)")
        .setColor("RANDOM")
        return message.channel.send(kickPermissionEmbed);
    }
    if(kickUser.hasPermission ("KICK_MEMBERS")) {
        var errorKickEmbed = new Discord.RichEmbed()
        .setDescription("Vous n'avez pas la permission d'expluser cette personne !")
        .setColor("RANDOM")
        return message.channel.send(errorKickEmbed);
    }

    let kickEmbed = new Discord.RichEmbed()
    .setDescription('**Expulsion du serveur**')
    .setColor("RANDOM")
    .addField('Utilisateur kick :', `${kickUser} (ID : ${kickUser.id})`)
    .addField("Raison :", kickReason)
    .setFooter(`Akatsuki | Commande kick demandé par ${message.author.tag}`, botIcon);

    let kickChannel = message.guild.channels.find(x => x.name === "「🖥」report"); 
    if (!kickChannel) {
        let kickChannelEmbed = new Discord.RichEmbed
        .setDescription("Erreur : Le salon 「📔」logs-akatsuki n'a pas été trouvé sur le serveur. Veuillez le creer.")
        .setColor("RANDOM")
        return message.channel.send(kickChannelEmbed)

    }
        
        message.delete();
        message.guild.member(kickUser).kick("Vous avez été explusé du serveur", message.guild.name, "pour", kickReason);
        kickChannel.send(kickEmbed);
        
        console.log("Commande kick exécuté par", message.author.username, "sur le serveur", message.guild.name);
    }

    module.exports.help = {
        name: "kick"
    };