const Discord = require('discord.js');

exports.run = (bot, message, args) => {
    var stats = new Discord.RichEmbed()
        .setFooter("BOT EXEMPLE", bot.user.avatarURL)
        .addField(`help`, "Commande !help.")
        .addField(`kick`, "Commande !kick.")
        .addField(`ban`, "Commande !ban.")
        .addField(`mute`, "Commande !mute.")
        .addField(`clear`, "Commande !clear.")
        .setTimestamp()
        .setColor("#E74F43")
        .setDescription(`:rotating_light: **Ceci est un exemple de la commande HELP.** :rotating_light:`)
    message.channel.send(stats)
};

exports.help = {
    name: "help"
};