const {
  SlashCommandBuilder,
  Colors,
  EmbedBuilder,
  ButtonBuilder,
} = require('discord.js')
const { WP_MAP } = require('../../utils/constants')
const { convert } = require('html-to-text')

const dayjs = require('dayjs')
const { getResume } = require('../../helpers/get-resume')
module.exports = {
  data: new SlashCommandBuilder().setName('mag').setDescription('Le Mag MO5'),
  async execute(interaction) {
    await interaction.deferReply({
      ephemeral: true,
    })
    const res = await fetch(
      `${WP_MAP}/posts?after=${dayjs()
        .subtract(3, 'day')
        .format('YYYY-MM-DD')}T00:00:00Z`
    )

    const posts = await res.json()

    const postsEmbed = new EmbedBuilder()
      .setColor(Colors.DarkAqua)
      .setTitle('Cette semaine')
      .setURL('https://mag.mo5.com/')
      .setThumbnail(
        'https://mag.mo5.com/wp-content/uploads/2012/02/Mo5com-icon.png'
      )
      .setDescription(`Les derniers articles du Mag MO5 :`)
      .addFields(
        posts.map((post) => ({
          name: convert(post.title.rendered, {
            wordwrap: 250,
          }),
          value:
            convert(post.excerpt.rendered, {
              wordwrap: 1000,
            }) +
            '\n' +
            `[Lire l'article](https://mag.mo5.com/chemin/vers/larticle)`,
        }))
      )
      .setTimestamp()

    await interaction.editReply({
      ephemeral: true,
      embeds: [postsEmbed],
    })
  },
}
