const { MessageEmbed } = require("discord.js")
const config = require("../config.js");
const { settings } = require("../modules/settings.js");

exports.run = (client, message, args, level) => {

  const embed = new MessageEmbed()
    .setColor('#0099ff')
    .setAuthor('Shroom Bot', 'https://gateway.pinata.cloud/ipfs/QmXPS6keUCaJSAuZhAPRqyzka9iRZ4e4bnhXPpBx94GRTB', 'https://discord.js.org')
    .setDescription(`[Follow this link to get a role.](${config.siteUrl}/role/guilds/${message.guild.id}/members/${message.author.id})`)
    .setTimestamp()

  // message.channel.send({ embeds: [embed] });

  const replying = settings.ensure(message.guild.id, config.defaultSettings).commandReply;
  message.reply({ embeds: [embed], allowedMentions: { repliedUser: (replying === "true") } });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["role"],
  permLevel: "User"
};

exports.help = {
  name: "role",
  category: "Miscellaneous",
  description: "Follow the link to get a role",
  usage: "role"
};

