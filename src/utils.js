import axeCore from 'axe-core'
import { IMPACT, STYLE } from './constants'

let cache = {}
const nodes = []
const deferred = {}
let lastNotification = ''

export function checkAndReport (options, node) {
  nodes.push(node)
  const deferred = createDeferred()

  axeCore.run(document, options.runOptions, (error, results) => {
    if (error) deferred.reject(error)
    if (!results) return
    if (JSON.stringify(results.violations) === lastNotification) return

    if (options.clearConsoleOnUpdate) {
      console.clear()
    }

    options.customResultHandler ? options.customResultHandler(error, results) : standardResultHandler(error, results)

    deferred.resolve()

    lastNotification = JSON.stringify(results.violations)
  })
  return deferred.promise
}

const standardResultHandler = function (errorInfo, results) {
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
    console.group('%cNew aXe issues', STYLE.head)
    results.violations.forEach(result => {
      const styl = IMPACT[result.impact] || IMPACT.minor
      console.groupCollapsed('%c%s: %c%s %s', STYLE[styl], result.impact, STYLE.defaultReset, result.help, result.helpUrl)
      result.nodes.forEach(function (node) {
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
    node[key].forEach(function (check) {
      relatedNodes = relatedNodes.concat(check.relatedNodes)
    })

    if (relatedNodes.length > 0) {
      console.groupCollapsed('Related nodes')
      relatedNodes.forEach(function (relatedNode) {
        logElement(relatedNode, console.log)
        logHtml(relatedNode)
      })
      console.groupEnd()
    }

    console.groupEnd()
  }
}

function logElement (node, logFn) {
  var el = document.querySelector(node.target.toString())
  if (!el) {
    logFn('Selector: %c%s', STYLE.boldCourier, node.target.toString())
  } else {
    logFn('Element: %o', el)
  }
}

function logHtml (node) {
  console.log('HTML: %c%s', STYLE.boldCourier, node.html)
}

function logFailureMessage (node, key) {
  var message = axeCore._audit.data.failureSummaries[key].failureMessage(node[key].map(function (check) {
    return check.message || ''
  }))
  console.error(message)
}
