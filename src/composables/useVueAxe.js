import merge from 'merge'

import useAxe from './useAxe'
import useLocale from './useLocale'

import { ref } from 'vue'
import { version } from '../../package.json'
import { vueAxe, defaultOptions } from '../utils/constants'

export default function useVueAxe (options) {
  let timeout = null
  const highlights = ref(null)
  const axeOptions = merge(defaultOptions, options)
  const axe = useAxe(axeOptions)
  const { $t } = useLocale(axeOptions.config.locale && axeOptions.config.locale.lang)

  function registerPlugin (app) {
    app.config.globalProperties.$vat = $t

    app.provide(vueAxe, {
      ...axe,
      version,
      highlights
    })

    if (axeOptions.auto) {
      app.mixin({
        updated () {
          if (this.$.type.disableAxeAudit || (this.$.type.name && this.$.type.name.toLowerCase().indexOf('transition') !== -1)) return
          axe.loading.value = true
          clearTimeout(timeout)
          timeout = setTimeout(axe.run, 2500)
        }
      })
    }

    axe.run()
  }

  return {
    axeOptions,
    registerPlugin
  }
}
