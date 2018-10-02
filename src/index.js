import axeCore from 'axe-core'
import debounce from 'lodash.debounce'
import { checkAndReport, resetCache } from './utils'
import { OPTIONS_DEFAULT } from './constants'

export default function install (Vue, options) {
  // Browser only
  if (typeof window === 'undefined') return

  options = {
    clearConsoleOnUpdate: true,
    ...options
  }

  // Configure the format data
  axeCore.configure({ ...OPTIONS_DEFAULT.config, ...options.config })

  // Rechecking when updating specific component
  Vue.mixin({
    methods: {
      clearAxeConsole () {
        resetCache()

        if (options.clearConsoleOnUpdate) {
          console.clear()
        }
      },
      debounceAxe: debounce(function () {
        this.clearAxeConsole()

        this.$nextTick(() => {
          checkAndReport(this.$el)
        })
      }, 2000, { maxWait: 6000 })
    },
    updated () {
      this.debounceAxe()
    },
    // Used for change of route
    beforeDestroy () {
      this.clearAxeConsole()
    }
  })

  return Vue.nextTick().then(() => checkAndReport(document))
}
