const Discord = require('discord.js');

exports.run = (bot, message, args) => {
    if (!message.guild) return;
    let member = message.mentions.members.first()
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande.")
    if (!member) return message.channel.send("Membre introuvable 👀")
    if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.ownerID) return message.channel.send("Vous ne pouvez pas mute ce membre")
    if (!member.manageable) return message.channel.send("Je ne peux pas mute ce membre.")
    let muterole = message.guild.roles.find(role => role.name === 'Mute')
    if (muterole) {
        member.addRole(muterole)
        message.channel.send(' :white_check_mark: ' + member + ' a été mute :white_check_mark:')
    } else {
        message.guild.createRole({name: 'Mute', permissions: 0}).then(function (role) {
            message.guild.channels.filter(channel => channel.type === 'text').forEach(function (channel) {
                channel.overwritePermissions(role, {
                    SEND_MESSAGES: false
                })
            })
            member.addRole(role)
            message.channel.send(' :white_check_mark: ' + member + ' a été mute :white_check_mark:')
        })
    }
};

exports.help = {
    name: "mute"
};