require('dotenv').config()

const DEPLOY_TYPE = process.env.DEPLOY_TYPE || 'production'

const DISCORD_TOKEN =
  DEPLOY_TYPE !== 'production'
    ? process.env.DISCORD_TOKEN_DEV
    : process.env.DISCORD_TOKEN
const DISCORD_CLIENT_ID =
  DEPLOY_TYPE !== 'production'
    ? process.env.DISCORD_CLIENT_ID_DEV
    : process.env.DISCORD_CLIENT_ID
const DISCORD_GUILD_ID =
  DEPLOY_TYPE !== 'production'
    ? process.env.DISCORD_GUILD_ID_DEV
    : process.env.DISCORD_GUILD_ID

const WP_MAP = process.env.WP_MAP

module.exports = {
  DISCORD_TOKEN: DISCORD_TOKEN || '',
  DISCORD_CLIENT_ID: DISCORD_CLIENT_ID || '',
  DISCORD_GUILD_ID: DISCORD_GUILD_ID || '',
  DEPLOY_TYPE: process.env.DEPLOY_TYPE || 'production',
  WP_MAP: WP_MAP || '',
}
