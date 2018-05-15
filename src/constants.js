export const OPTIONS_DEFAULT = {
  config: {
    checks: [{
      id: 'color-contrast',
      options: {
        noScroll: true
      }
    }]
  }
}

export const IMPACT = {
  critical: 'critical',
  serious: 'serious',
  moderate: 'moderate',
  minor: 'minor'
}

export const STYLE = {
  head: 'padding:6px;font-size:20px;background-color:#8ba6c5;color:#fff;font-weight:bold;',
  boldCourier: 'font-weight:bold;font-family:Courier;',
  critical: 'color:#aa0000;font-weight:bold;',
  serious: 'color:#aa0000;font-weight:normal;',
  moderate: 'color:orange;font-weight:bold;',
  minor: 'color:orange;font-weight:normal;',
  defaultReset: 'font-color:black;font-weight:normal;'
}
