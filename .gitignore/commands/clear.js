const Discord = require ("discord.js");

module.exports.run = async (bot, message, args) => {
 
    if(!message.member.hasPermission("MANAGE_MESSAGES")) {

        let errorPermClear = new Discord.RichEmbed()
        .setDescription("Vous n'avez pas la permission d'utiliser cette commande.")
        .setColor("RANDOM")
         message.reply(errorPermClear)

    }

    if (!args[0]) {
    let argsErrorClear = new Discord.RichEmbed()
    .setDescription("Veuillez indiquer le nombre de message à supprimer | Syntaxe : ?clear nombre")
    .setColor("RANDOM")
    message.reply(argsErrorClear)

    }

    let clearEmbed = new Discord.RichEmbed()
    .setDescription(`Suppression de **${args[0]}** messages en cours.`)
    .setColor("RANDOM")

    message.channel.bulkDelete(args[0]).then(() => {
        message.channel
        .send(clearEmbed)
        .then(message => message.delete(5000));

    })

}

    module.exports.help = {
        name: "clear"
    };
