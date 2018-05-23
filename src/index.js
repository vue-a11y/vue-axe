import axeCore from 'axe-core'
import { checkAndReport, resetCache } from './utils'
import { OPTIONS_DEFAULT } from './constants'

export default function install (Vue, options) {
  // Browser only
  if (typeof window === 'undefined') return

  // Configure the format data
  axeCore.configure({ ...OPTIONS_DEFAULT.config, ...options.config })

  // Rechecking when updating specific component
  Vue.mixin({
    methods: {
      clearAxeConsole () {
        console.clear()
        resetCache()
      }
    },
    updated () {
      this.clearAxeConsole()
      this.$nextTick(() => {
        checkAndReport(this.$el)
      })
    },
    // Used for change of route
    beforeDestroy () {
      this.clearAxeConsole()
    }
  })

  return Vue.nextTick().then(() => checkAndReport(document))
}
