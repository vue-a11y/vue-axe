import axeCore from 'axe-core'
import debounce from 'lodash.debounce'
import merge from 'lodash.merge'
import { checkAndReport, resetCache } from './audit'
import { clear, defaultOptions, draf } from './utils'

export default function install (Vue, options) {
  // Browser only
  if (typeof window === 'undefined') return

  // merge options
  options = merge(defaultOptions, options)

  // set config
  axeCore.configure({ ...options.config })

  // register plugins
  options.plugins.forEach(plugin => axeCore.registerPlugin(plugin))

  // vue-axe methods in Vue Instance
  Vue.prototype.$axe = {
    run ({ clearConsole = options.clearConsoleOnUpdate, element } = {}) {
      clear(clearConsole, options)
      draf(() => checkAndReport(options, element))
    },
    plugins: axeCore.plugins
  }

  // if false, disable automatic verification
  if (!options.auto) return

  const checkWithDebounce = debounce(function () {
    resetCache()
    draf(() => checkAndReport(options))
  }, 1000, { maxWait: 5000 })

  // Rechecking when updating specific component
  Vue.mixin({
    updated () {
      checkWithDebounce()
    },
    // Used for change of route
    beforeDestroy () {
      clear(true, options)
    }
  })
}
