const Discord = require("discord.js");
const roleOptions = require("../optionals/roles.json");
const embedOptions = require("../optionals/embeds.json");
const loginOptions = require("../optionals/login.json");
const commandOptions = require("../optionals/data.json");






module.exports = {
  name : "kayıt",
  aliases : [ "büyücü" , "potter" 
             , "büyücüü" , "ekaydet"],
  run : async (client , message , args) => {
if(!message.member.roles.cache.has(roleOptions.KayıtYetkilisi)) { return message.delete({timeout : 500})}
if(message.channel.id != commandOptions.registerChannel) {return message.delete({timeout : 500})}
var büyücürole = message.guild.roles.cache.get(roleOptions.BüyücüRolü);
var evsizbüyücürole = message.guild.roles.cache.get(roleOptions.EvsizBüyücüRolü);
if(!büyücürole || !evsizbüyücürole) { return console.log(`[BOT] : Evsiz Büyücü Veya Büyücü Rollerinden  Eksik Olanlar Var Veya Doldurulmamış!`)}
var member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
if(!member) return message.channel.send(new Discord.MessageEmbed().setFooter(embedOptions.setFooterOne).setColor(embedOptions.setColorOne).setDescription(`
> ${message.author} **Büyücü Olarak Kaydetmek İçin Lütfen Bir Evsiz Büyücüyü Etiketleyin.**


`)).then(ozijs => ozijs.delete({timeout : 2000}))
if (message.member.roles.highest.position <= member.roles.highest.position) return message.channel.send(new Discord.MessageEmbed()
                                                                                                       .setColor(embedOptions.setColorOne)
                                                                                                        .setFooter(embedOptions.setFooterOne)
.setDescription(`> ${message.author} Senden Üst Yetkili Birisini Kayıt Edemezsin!`)
                                                                                                       
                                                                                                       ).then(xyz => xyz.delete({timeout : 2000}));
    
    
let ilkislem = new Discord.MessageEmbed()
.setAuthor(
      message.member.displayName,
      message.author.avatarURL({ dynamic: true })
    )
    .setFooter(embedOptions.setFooterOne)
    .setColor(embedOptions.setColorOne)
    .setTimestamp();
    
    
if(member.roles.cache.has() && member.roles.cache.has()) { return message.channel.send(new Discord.MessageEmbed().setColor(embedOptions.setColorOne).setFooter(embedOptions.setFooterOne)
.setDescription(`**${message.author} ${member} Üyesi Zaten Sunucuda Kayıtlı!**`)                                                                                    
                                                                                      ).then(calanpkklıdır => calanpkklıdır.delete({timeout : 1000}))}
    
    
let isim1 = args[1];
let isim2 = args[2];
let isim3 = args[3];
    
    
if(!isim1) return message.channel.send(new Discord.MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor(embedOptions.setColorOne).setFooter(embedOptions.setFooterOne).setDescription(`
**${message.author} Büyücünün İlk İsmini Girmelisiniz.**`)).then(pkkhainlan => pkkhainlan.delete({timeout : 2000}))
    
if(!isim2) return message.channel.send(new Discord.MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor(embedOptions.setColorOne).setFooter(embedOptions.setFooterOne).setDescription(`
**${message.author} Büyücünün Soy İsmini Girmelisiniz.**`)).then(pkkhainlan => pkkhainlan.delete({timeout : 2000}))
    
    if(!isim3) return message.channel.send(new Discord.MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor(embedOptions.setColorOne).setFooter(embedOptions.setFooterOne).setDescription(`
**${message.author} Büyücünün Gerçek İsmini Girmelisiniz.**`)).then(pkkhainlan => pkkhainlan.delete({timeout : 2000}))



if(!isNaN(isim1)) return message.channel.send(new Discord.MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor(embedOptions.setColorOne).setFooter(embedOptions.setFooterOne).setDescription(`
**${message.author} Büyücü Veya Cadı İsimleri Sayıdan Oluşamaz.**

`)).then(pkkhainlan => pkkhainlan.delete({timeout : 2000}))
if(!isNaN(isim2)) return message.channel.send(new Discord.MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor(embedOptions.setColorOne).setFooter(embedOptions.setFooterOne).setDescription(`
**${message.author} Büyücü Veya Cadı İsimleri Sayıdan Oluşamaz.**

`)).then(pkkhainlan => pkkhainlan.delete({timeout : 2000}))
if(!isNaN(isim3)) return message.channel.send(new Discord.MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor(embedOptions.setColorOne).setFooter(embedOptions.setFooterOne).setDescription(`
**${message.author} Büyücü Veya Cadı İsimleri Sayıdan Oluşamaz.**

`)).then(pkkhainlan => pkkhainlan.delete({timeout : 2000}))
    
let nickname = `${isim1} ${isim2}/${isim3}`

await member.setNickname(`${nickname}`).catch();
let islemEmbed = await message.channel.send(
    ilkislem.setDescription(`${member} üyesinin cinsiyetini emojilerle belirt!`)
  );
await islemEmbed.react(loginOptions.erkekEmoji).catch();
  await islemEmbed.react(loginOptions.kızEmoji).catch();
    
const reactionFilter = (reaction, user) => {
    return (
      [loginOptions.erkekEmoji, loginOptions.kızEmoji].includes(
        reaction.emoji.id
      ) && user.id === message.author.id
    );
  };
    
islemEmbed
    .awaitReactions(reactionFilter, { max: 1, time: 10000, error: ["time"] })
    .then(async res => {
      let r = res.first();
      if (r.emoji.id == loginOptions.erkekEmoji) {
      member.roles.remove(roleOptions.EvsizBüyücüRolü)
      member.roles.add(roleOptions.BüyücüRolü)
      }
  else if (r.emoji.id == loginOptions.kızEmoji) {
    member.roles.remove(roleOptions.EvsizBüyücüRolü)
      member.roles.add(roleOptions.CadıRolü)
        
      }
  
  islemEmbed.reactions.removeAll();
  islemEmbed
        .edit(new Discord.MessageEmbed()
         .setColor(embedOptions.setColorOne)
            .setTitle("Hogwarts`a Hoşgeldin")
            .setThumbnail(member.user.avatarURL({ dynamic: true, size: 2048 }))
            .setFooter(embedOptions.setFooterOne)
            .setTimestamp()
            .setDescription(`
            **Kayıt Olan Büyücü :  ${member}
              Büyücünün Kimliği : ${member.id}
              Kayıt Eden Yetkili : ${message.author}
                
                **
            
            `)    
             
             
             )
  
  
  
  
  
}).catch(err => {
      islemEmbed.delete();
      message
        .reply(
          "10 saniye içerisinde cinsiyet belirtilmediği için kayıt işlemi iptal edildi!"
        )
    console.log(`[BOT] : Bir hata Oluştu!` + err)
       
    });
    
        


    
    
    

 
    
  }
}