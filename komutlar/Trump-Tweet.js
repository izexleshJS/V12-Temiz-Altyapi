const Discord = require("discord.js");

exports.run = (client, message, args) => { 
  let yazı = args.slice(0).join(" ");
  if (yazı.length < 1)
    return message.reply("❓ Trump'a Ne Yazdırmak İstiyorsun?");
  var request = require("request");
  request(`https://pinkie-api.glitch.me/api/trump/${yazı}`, function(
    error,
    response,
    body
  ) {
    if (error) return console.log("⚠ HATA ⚠", error);
    else if (!error) {
      var veri = JSON.parse(body);
      const devtr = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(veri.message)
        .setFooter(`BLm`, message.author.avatarURL)
        .setTimestamp();
      return message.channel.sendEmbed(devtr);
    }
  });
}; 

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["trump"]
};

exports.help = {
  name: "trump",
  description: "Trumpa istediğniz Şeyi Yazdırdırır",
  usage: "trump <yazı>"
};