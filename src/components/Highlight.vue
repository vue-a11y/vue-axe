<template>
  <template v-if="highlights">
    <div
      v-for="(highlight, index) in highlights"
      :key="`highlight-${index}`"
      class="va-fixed va-overflow-visible va-pointer-events-none"
      :style="{
        ...defaultStyle,
        ...{
          width: `${highlight.offset.width}px`,
          height: `${highlight.offset.height}px`,
          top: `${highlight.offset.top}px`,
          bottom: `${highlight.offset.bottom}px`,
          left: `${highlight.offset.left}px`,
          right: `${highlight.offset.right}px`,
          outlineOffset: highlight.target === 'html' ? '-3px' : 'initial'
        }
      }"
    />
  </template>
</template>

<script>
import useHighlight from '../composables/useHighlight'

export default {
  name: 'Highlight',

  disableAxeAudit: true,

  setup () {
    const { highlights } = useHighlight()
    const defaultStyle = {
      zIndex: '9999',
      outlineStyle: 'solid',
      outlineOffset: '-3px',
      outlineColor: 'var(--va-notification)'
    }

    return {
      highlights,
      defaultStyle
    }
  }
}
</script>
