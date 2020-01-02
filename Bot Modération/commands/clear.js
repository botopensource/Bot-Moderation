const Discord = require('discord.js');

exports.run = (bot, message, args) => {
    if(message.author.id !== "414150494391500800" && message.author.id !== "285079245204619264") {
        message.channel.send("Tu n'as pas le droit à la commande **clear**.")
    } else {
        if (!args[0]) return message.reply("Utiliser: !clear <Nombre de message a supprimer>")
        message.channel.bulkDelete(args[0]).then(() => {
            let clearembed = new Discord.RichEmbed()
            .setTimestamp(new Date())
            .setColor("RANDOM")
            .setTitle(`Message supprimé :wink:: **${args[0]}**`)
            message.channel.send(clearembed)
            message.delete(10000)
        })
    }
};

exports.help = {
    name: "clear"
};