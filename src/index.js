import axeCore from 'axe-core'
import merge from 'deepmerge'
import { checkAndReport, resetCache } from './audit'
import { clear, defaultOptions, draf } from './utils'

export default function install (Vue, options = {}) {
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
    run ({ clearConsole = options.clearConsoleOnUpdate, element, label } = {}) {
      clear(clearConsole, options)
      draf(() => checkAndReport(options, element, (label || 'Run manually')))
    },
    plugins: axeCore.plugins
  }

  // if false, disable automatic verification
  if (!options.auto) return

  function axeRun () {
    const componentsName = this.$options.name || ''
    resetCache()
    draf(() => checkAndReport(options, this.$el, componentsName))
  }

  // Rechecking when updating specific component
  let timeout = null
  Vue.mixin({
    updated () {
      timeout && clearTimeout(timeout)
      timeout = setTimeout(axeRun.bind(this), 2500)
    },
    // Used for change of route
    beforeDestroy () {
      clear(true, options)
    }
  })

  // First check
  setTimeout(() => draf(() => checkAndReport(options, null, 'App')), options.delay)
}
