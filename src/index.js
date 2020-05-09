import axeCore from 'axe-core'
import debounce from 'lodash.debounce'
import { OPTIONS_DEFAULT } from './constants'
import { checkAndReport, resetCache, resetLastNotification } from './utils'

export default function install (Vue, options) {
  // Browser only
  if (typeof window === 'undefined') return

  options = {
    clearConsoleOnUpdate: true,
    runOptions: {
      reporter: 'v2',
      resultTypes: ['violations']
    },
    ...options
  }

  // Configure the format data
  axeCore.configure({ ...OPTIONS_DEFAULT.config, ...options.config })

  // Rechecking when updating specific component
  Vue.mixin({
    updated () {
      this.debounceAxe()
    },
    // Used for change of route
    beforeDestroy () {
      this.clearAxeConsole(true)
    },
    methods: {
      clearAxeConsole (forceClear = false) {
        resetCache()

        if (forceClear && options.clearConsoleOnUpdate) {
          console.clear()
          resetLastNotification()
        }
      },
      debounceAxe: debounce(function () {
        this.clearAxeConsole()

        this.$nextTick(() => {
          checkAndReport(options, this.$el)
        })
      }, 1000, { maxWait: 5000 })
    }
  })

  return Vue.nextTick().then(() => checkAndReport(options, document))
}
