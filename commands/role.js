const { MessageEmbed } = require("discord.js")
const config = require("../config.js");
const { settings } = require("../modules/settings.js");

exports.run = (client, message, args, level) => {

  const embed = new MessageEmbed()
    .setColor('#0099ff')
    .setAuthor('Shroom Bot', 'https://cdn.discordapp.com/avatars/904964094493331486/ebe7fe26128d07966cdae514f1701d90.png', 'https://discord.js.org')
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

