import axeCore from 'axe-core'

export const defaultOptions = {
  auto: true,
  config: {
    branding: {
      application: 'vue-axe'
    },
    locale: null
  },
  runOptions: {
    reporter: 'v2',
    resultTypes: ['violations']
  },
  plugins: []
}

export const impacts = [...axeCore.constants.impact].reverse()

export const vueAxe = Symbol('vue-axe')
