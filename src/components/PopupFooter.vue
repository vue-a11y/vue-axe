<template>
  <div class="va-flex va-items-center va-justify-between va-border-0 va-border-t va-border-solid va-border-gray-200 va-bg-main va-text-color">
    <button
      class="va-btn va-flex va-items-center va-py-4 va-px-5 va-border-0 va-border-r va-border-solid va-border-gray-200 hover:va-bg-primary"
      type="button"
      aria-labelledby="va-btn-run-label"
      @click="run({ force: true })"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12.4"
        height="14.2"
        focusable="false"
        aria-hidden="true"
        :class="{
          'va-animate-spin': loading
        }"
      >
        <path
          d="M.9 0a.9.9 0 01.9.9v1.9A6.2 6.2 0 0112 5a.9.9 0 11-1.7.6 4.4 4.4 0 00-7.7-1.2h2.6a.9.9 0 110 1.8H1a.9.9 0 01-.9-.9V1A.9.9 0 01.9 0zm0 8a.9.9 0 011.1.6 4.4 4.4 0 007.8 1.2H7a.9.9 0 010-1.8h4.4a.9.9 0 011 .9v4.4a.9.9 0 11-1.8 0v-1.8A6.2 6.2 0 01.4 9.2.9.9 0 01.9 8z"
          fill="currentColor"
        />
      </svg>
      <span
        id="va-btn-run-label"
        class="va-text-base va-font-medium va-ml-2"
      >
        {{ loading ? $vat('running', 'Running') : $vat('run_again', 'Run again') }}
      </span>
    </button>
  </div>
</template>

<script>
import { inject } from 'vue'
import { vueAxe } from '../utils/constants'

export default {
  name: 'PopupFooter',

  disableAxeAudit: true,

  setup () {
    const { run, loading } = inject(vueAxe)

    return {
      run,
      loading
    }
  }
}
</script>
