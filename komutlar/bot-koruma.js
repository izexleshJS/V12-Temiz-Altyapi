const Discord = require('discord.js');
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
exports.run = async (client, message, args) => {

let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`Bu komutu kullanabilmek için "\`Sunucuyu Yönet\`" yetkisine sahip olmalısın.`)
  
  let aktif = await db.fetch(`bottemizle_${message.guild.id}`)
  if (aktif) {
    db.delete(`bottemizle_${message.guild.id}`)
    message.channel.send(`:white_check_mark:> Bot eklendiğinde atılması için ayarlanmış sistem başarıyla kapatıldı. BLM Code`)
  }
 
  if (!aktif) {
    db.set(`bottemizle_${message.guild.id}`, 'aktif')
    message.channel.send(`:white_check_mark: Başarılı! Artık sunucuya bot eklendiğinde otomatikmen güvenlik sebebiyle atılacak. BLM Code`)
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['botgüvenlik','bg'],
  permLevel: 0
};

exports.help = {
  name: 'bot-güvenlik',
  description: 'Sunucuya bot eklendiğinde atılmasını sağlayan sistemi başarıyla aktifleştirirsiniz/kapatırsınız.',
  usage: 'bot-güvenlik'
};
