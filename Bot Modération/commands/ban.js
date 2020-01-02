const Discord = require('discord.js');

exports.run = (bot, message, args) => {
    if (!message.guild) return;
    let member = message.mentions.members.first();
    if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande.")
    if (!member) return message.channel.send(":x: Veuillez mentionner un utilisateur. :x:")
    if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send("Vous ne pouvez pas bannir cet utilisateur :x:")
    if (!member.bannable) return message.channel.send(":sunglass: Je ne peux pas bannir cet utilisateur. :sunglass:")
    message.guild.ban(member, {days: 7})
    message.channel.send(' :white_check_mark: **' + member.user.username + '** a été banni. :white_check_mark:')
};

exports.help = {
    name: "ban"
};