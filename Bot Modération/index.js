const Discord = require('discord.js');
let config = require("./config/config.json");
const bot = new Discord.Client();
const fs = require('fs');
let prefix = config.prefix;

bot.commands = new Discord.Collection();
fs.readdir("./commands/", (err, files) => {
  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Commande introuvable.");
    return;
  }
  jsfile.forEach((f, i) => {
    let props = require(`./commands/${f}`)
    console.log(`${f} est OK !`);
    bot.commands.set(props.help.name, props);
  })
});

bot.on('ready', () => {
  console.log(`Bot connecté sous le nom: ${bot.user.tag}!`);
});

bot.on('message', async (message) => {
  if(message.author.bot) return;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    if(message.content.startsWith(prefix)) {
      let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(bot,message,args);
  } else {
    message.channel.send("Erreur système.")
  }
});

bot.login(config.token);
module.exports = bot;