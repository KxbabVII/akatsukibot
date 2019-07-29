const Discord = require ("discord.js");

module.exports.run = async (bot, message, args) => {    
   
    let { body } = await superagent.get(`https://aws.random.cat//meow`)
      let GroCha = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setTitle("GroCha")
      .setImage(body.file)
      
      message.channel.send(GroCha)
      console.log("Commande grocha exécuté")
      
  }
  
  module.exports.help = {
    name: "grocha"
};
