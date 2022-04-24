const  Discord = require('discord.js');
const {Client} = require("discord.js")
const client = new Discord.Client();
const fs = require('fs');
const db = require('quick.db');
const moment = require('moment')
require('moment-duration-format')
const commands = client.commands = new Discord.Collection();
const aliases = client.aliases = new Discord.Collection();
const gamedig = require("gamedig")



const botOptions = require("./optionals/bot.json");
const gameOptions = require("./optionals/game.json");




fs.readdirSync('./commands', { encoding: 'utf8' }).filter(file => file.endsWith(".js")).forEach((files) => {
    let command = require(`./commands/${files}`);
    if (!command.name) return console.log(`Bad Command File => [/commands/${files}]`)
    commands.set(command.name, command);
    if (!command.aliases || command.aliases.length < 1) return console.log(`Aliases Not Found.`)
    command.aliases.forEach((otherUses) => { aliases.set(otherUses, command.name); })
});


client.on('message', message => {
    const prefix = botOptions.BotPrefix;
    if (!message.guild || message.author.bot || !message.content.startsWith(prefix)) return;
    const args = message.content.slice(1).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    const cmd = client.commands.get(command) || client.commands.get(client.aliases.get(command))
    if (!cmd) return;
    if(cmd) {
        
    cmd.run(client, message, args)
    }
});




client.on("ready" , async() => {
console.log(`[Pluto Bot] : Giriş Yaptım Artık Hazırım.`)
setInterval(() => {

client.user.setPresence({ activity: {name: `Pluto 💖 Ozzy`, }, status: `dnd`, });


} , 50000)// 10 Dakikada Bir Bot Kendi Durumunu Yeniler Hazır Olduğu Sürece Googleden Bu Değeri Msye Çevirerek Zamanı Azaltıp Arttırabilrsnz.
});





















client.login(botOptions.BotToken).catch(err => console.log(`[HOGWARTS V1] : Bot Giriş Yapamadı Tokeni Kontrol Ediniz.` + err))











                                                                            
                                                                             
                                                                             
