<template>
  <div class="va-border-0 va-flex va-items-center va-justify-between va-py-3 va-px-4 va-border-b va-border-solid va-border-gray-200 va-bg-main va-text-color">
    <a
      href="https://github.com/vue-a11y/vue-axe"
      target="_blank"
      rel="noopener"
    >
      <svg
        focusable="false"
        role="img"
        aria-labelledby="va-logo-title"
        xmlns="http://www.w3.org/2000/svg"
        width="46"
        height="45.3"
      >
        <title id="va-logo-title">Vue aXe ({{ $vat('open_new_tab') }})</title>
        <path
          d="M34.4 42h-32L0 38.3 22.6 0l17.2 29.3H33L22.5 13V1.3v14.5L7.8 36.4h26.6a6.1 6.1 0 015.5-3.4 6.1 6.1 0 016.1 6.1 6.1 6.1 0 01-6.1 6.2 6.1 6.1 0 01-5.5-3.4zm2.4-2.9a3 3 0 003 3.1 3 3 0 003.1-3 3 3 0 00-3-3.1 3 3 0 00-3.1 3z"
          fill="#3ab982"
        />
        <path
          d="M4.4 35.7L22.5 5 34 24h-6.4l-5-8.3v-5.4 5.4L10.8 35.7z"
          fill="#34495f"
        />
        <g
          fill="#34495f"
          stroke="#34495f"
          stroke-width="1.2"
        >
          <path d="M21.4 33.6v-1h0a1.7 1.7 0 01-.4.4 2.3 2.3 0 01-.5.4 2.6 2.6 0 01-.6.2 2.7 2.7 0 01-.6 0 2.8 2.8 0 01-1.2-.1 2.6 2.6 0 01-.8-.7 2.9 2.9 0 01-.6-1 3.4 3.4 0 01-.2-1.1 3.3 3.3 0 01.2-1.2 2.9 2.9 0 01.5-1 2.7 2.7 0 011-.6 2.8 2.8 0 011-.2 2.7 2.7 0 01.7 0 2.6 2.6 0 01.6.3 2.4 2.4 0 01.5.3 2 2 0 01.4.5h0v-1h.9v5.8zm0-3a2.4 2.4 0 00-.1-.8 2.1 2.1 0 00-.4-.7 2 2 0 00-.7-.5 2 2 0 00-.9-.2 2 2 0 00-.8.2 2 2 0 00-.7.5 2 2 0 00-.4.7 2.7 2.7 0 00-.1.9 2.5 2.5 0 00.1.8 2.3 2.3 0 00.5.8 2 2 0 00.6.5 2 2 0 00.9.2 2 2 0 00.9-.2 2 2 0 00.6-.5 2.3 2.3 0 00.4-.8 3 3 0 00.1-.9zM28.5 33.6l-1.7-2.4h0L25 33.6h-1l2.2-3-2-2.8h1l1.5 2.2h0l1.5-2.2h1l-2 2.8 2.2 3z" />
        </g>
      </svg>
    </a>
    <div class="va-text-right va-text-sm va-font-medium">
      <span>v{{ versions.vueAxe }} (vue-axe)</span> <br>
      <span>v{{ versions.axeCore }} (axe-core) </span>
    </div>
  </div>
</template>

<script>
import { inject, ref, watch } from 'vue'
import { vueAxe } from '../utils/constants'

export default {
  name: 'PopupHeader',

  disableAxeAudit: true,

  setup () {
    const { version, results } = inject(vueAxe)
    const versions = ref({
      vueAxe: version,
      axeCore: null
    })

    watch(results, val => {
      versions.value.axeCore = val.testEngine.version
    }, { deep: true })

    return {
      versions
    }
  }
}
</script>
