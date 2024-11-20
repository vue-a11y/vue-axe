import axeCore from 'axe-core'

let cache = {}
let style = {}
let lastNotification = ''

const deferred = {}
const impacts = [...axeCore.constants.impact].reverse()

export function checkAndReport (options, node, label) {
  const deferred = createDeferred()
  style = { ...options.style }

  axeCore.run(node || options.element || document, options.runOptions, (error, results) => {
    if (error) deferred.reject(error)
    if (results && !results.violations.length) return
    if (JSON.stringify(results.violations) === lastNotification) return

    if (options.clearConsoleOnUpdate) {
      console.clear()
    }

    options.customResultHandler ? options.customResultHandler(error, results) : standardResultHandler(error, results, label)
    deferred.resolve()
    lastNotification = JSON.stringify(results.violations)
  })
  return deferred.promise
}

const standardResultHandler = function (errorInfo, results, label) {
  results.violations = results.violations.filter(result => {
    result.nodes = result.nodes.filter(node => {
      const key = node.target.toString() + result.id
      const retVal = (!cache[key])
      cache[key] = key
      return retVal
    })
    return (!!result.nodes.length)
  })

  if (results.violations.length) {
    const violations = sortViolations(results.violations)
    console.group(`%cAxe issues ${label ? '- ' + label : ''}`, style.head)
    violations.forEach(result => {
      console.groupCollapsed('%c%s%c %s %s %c%s', style[result.impact || 'minor'], result.impact, style.title, result.help, '\n', style.url, result.helpUrl)
      result.nodes.forEach(node => {
        failureSummary(node, 'any')
        failureSummary(node, 'none')
      })
      console.groupEnd()
    })
    console.groupEnd()
  }
}

export function resetCache () {
  cache = {}
}

export function resetLastNotification () {
  lastNotification = ''
}

export const draf = (cb) => requestAnimationFrame(() => requestAnimationFrame(cb))

function sortViolations (violations) {
  let sorted = []
  impacts.forEach(impact => {
    sorted = [...sorted, ...violations.filter(violation => violation.impact === impact)]
  })
  return sorted
}

function createDeferred () {
  deferred.promise = new Promise((resolve, reject) => {
    deferred.resolve = resolve
    deferred.reject = reject
  })
  return deferred
}

function failureSummary (node, key) {
  if (node[key].length > 0) {
    logElement(node, console.groupCollapsed)
    logHtml(node)
    logFailureMessage(node, key)

    var relatedNodes = []
    node[key].forEach(check => {
      relatedNodes = relatedNodes.concat(check.relatedNodes)
    })

    if (relatedNodes.length > 0) {
      console.groupCollapsed('Related nodes')
      relatedNodes.forEach(relatedNode => {
        logElement(relatedNode, console.log)
        logHtml(relatedNode)
      })
      console.groupEnd()
    }
    console.groupEnd()
  }
}

function logElement (node, logFn) {
  const el = document.querySelector(node.target.toString())
  if (!el) {
    return logFn('Selector: %c%s', style.boldCourier, node.target.toString())
  }
  logFn('Element: %o', el)
}

function logHtml (node) {
  console.log('HTML: %c%s', style.boldCourier, node.html)
}

function logFailureMessage (node, key) {
  const message = axeCore._audit.data.failureSummaries[key]
    .failureMessage(node[key]
      .map(function (check) {
        return check.message || ''
      }))
  console.error(message)
}
