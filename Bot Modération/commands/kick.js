const Discord = require('discord.js');

exports.run = (bot, message, args) => {
    if (!message.guild) return;
    let member = message.mentions.members.first()
    if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande.")
    if (!member) return message.channel.send(":pineapple: Veuillez mentionner un utilisateur. :pineapple:")
    if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send("Vous ne pouvez pas kick cet utilisateur :x:")
    if (!member.kickable) return message.channel.send("Je ne peux pas exclure cet utilisateur.")
    member.kick()
    message.channel.send(' :white_check_mark: **' + member.user.username + '** a été exclu :white_check_mark:')
};

exports.help = {
    name: "kick"
};