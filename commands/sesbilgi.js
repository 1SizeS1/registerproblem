const Discord = require("discord.js");
module.exports = {
  name : "sesbilgi",
  aliases : ["ses-bilgi","nerede","nerde","bul"],
  run : async (client , message , args) => {
let member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
if(!member) return message.channel.send(`Sesli Kanallarda Aranılacak Kullanıcıyı Etiketlemeyi Unuttunuz.`)
    
var mik;
var kulaklık;
if(member.voice.selfDeaf) { kulaklık = `Kapalı Durumda`} else { kulaklık = `Açık Durumda`};
if(member.voice.selfMute) { mik = `Kapalı Durumda`} else { mik = `Açık Durumda`};
var channelname = member.voice.channel.name;
var channelmembers = member.voice.channel.members.size;
var channelusers = member.voice.channel.members.map(x => x.user).join(" , ")
    
    
var information = new Discord.MessageEmbed()
.setDescription(`\`Aranılan Kullanıcı\` : **${member}(${member.id})**
\`Hangi Kanalda\` : \`${channelname}\`
\`Mikrofon Durumu\` : \`${mik}\`
\`Kulaklık Durumu\` : \`${kulaklık}\`
\`Kanaldaki Üyeler\` : ${channelusers}
`).setColor("BLACK").setFooter(`Made By Ozi`)

message.channel.send(information).then(() => { console.log(`Ses Bilgisi İstendi`)});
      
    
  }
  };
