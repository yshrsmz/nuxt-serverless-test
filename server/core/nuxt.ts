import { Nuxt } from 'nuxt'
import config from '../../nuxt.config'

config.dev = !(process.env.NODE_ENV === 'production')

if (config.dev) {
  config.extensions = ['ts']
}

export const nuxt = new Nuxt(config)

export default config
