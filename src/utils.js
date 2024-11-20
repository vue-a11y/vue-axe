import { resetCache, resetLastNotification } from './audit'

export const draf = (cb) => requestAnimationFrame(() => requestAnimationFrame(cb))

export const defaultOptions = {
  auto: true,
  allowConsoleClears: true,
  clearConsoleOnUpdate: false,
  delay: 500,
  element: null,
  config: {
    branding: {
      application: 'vue-axe'
    }
  },
  runOptions: {
    reporter: 'v2',
    resultTypes: ['violations']
  },
  style: {
    head: 'padding:6px;font-size:20px;font-weight:bold;',
    boldCourier: 'font-weight:bold;font-family:Courier;',
    moderate: 'padding:2px 4px;border-radius:5px;background-color:#FFBA52;color:#222;font-weight:normal;',
    critical: 'padding:2px 4px;border-radius:5px;background-color:#AD0000;color:#fff;font-weight:normal;',
    serious: 'padding:2px 4px;border-radius:5px;background-color:#333;color:#FFCE85;font-weight:normal;',
    minor: 'padding:2px 4px;border-radius:5px;background-color:#333;color:#FFCE85;font-weight:normal;',
    title: 'font-color:black;font-weight:bold;',
    url: 'font-color:#4D4D4D;font-weight:normal;'
  },
  plugins: []
}

export function clear (forceClear = false, options) {
  resetCache()
  if (forceClear || options.clearConsoleOnUpdate) {
    resetLastNotification()
    if (options.allowConsoleClears) {
      console.clear()
    }
  }
}
