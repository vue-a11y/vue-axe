import { onUnmounted, inject, ref } from 'vue'
import { vueAxe } from '../utils/constants'

export default function useHighlight () {
  const els = ref(null)
  const { highlights } = inject(vueAxe)

  onUnmounted(reset)

  function toggleHighlight (nodes) {
    if (highlights.value) return reset()
    highlights.value = []

    for (const node of nodes) {
      const target = node.target[0]
      const el = document.querySelector(target)
      if (!el) continue
      highlights.value = [...highlights.value, { target, offset: el.getBoundingClientRect() }]
    }
  }

  function reset () {
    highlights.value = null
    els.value = null
  }

  return {
    highlights,
    toggleHighlight
  }
}
