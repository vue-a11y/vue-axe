import axeCore from 'axe-core'
import { checkAndReport } from './utils'
import { OPTIONS_DEFAULT } from './constants'

export default function install (Vue, options) {
  // Browser only
  if (typeof window === 'undefined') return

  // Configure the format data
  axeCore.configure({ ...OPTIONS_DEFAULT.config, ...options.config })

  // Rechecking when updating specific component
  Vue.mixin({
    updated () {
      this.$nextTick(() => {
        checkAndReport(this.$el)
      })
    }
  })

  Vue.nextTick(() => {
    return checkAndReport(document)
  })
}
