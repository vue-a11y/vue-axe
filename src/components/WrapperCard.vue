<template>
  <component
    :is="tag"
    class="va-cursor-pointer"
    @mousedown="onMouseEvent"
    @mouseup="onMouseEvent"
  >
    <slot />
  </component>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'WrapperCard',

  disableAxeAudit: true,

  props: {
    tag: {
      type: String,
      default: 'div'
    }
  },

  emits: ['trigger'],

  setup (_, { emit }) {
    const up = ref(null)
    const down = ref(null)

    function isRightClick (buttons) {
      return buttons === 2
    }

    function onMouseEvent ({ type, buttons, target }) {
      if (isRightClick(buttons)) return
      type === 'mousedown' ? onMouseDown() : onMouseUp()
    }

    function onMouseUp () {
      up.value = +new Date()
      if ((up.value - down.value) < 200) emit('trigger')
    }

    function onMouseDown () {
      down.value = +new Date()
    }

    return {
      onMouseEvent
    }
  }
}
</script>
