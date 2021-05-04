<template>
  <a
    target="_blank"
    rel="noopener"
    class="va-inline-flex va-py-2 va-px-1 va-items-center va-text-blue-700 va-no-underline va-font-medium hover:va-underline"
  >
    <slot />
    <span class="va-sr-only">({{ $vat('open_new_tab') }})</span>
    <svg
      class="va-ml-1"
      fill="none"
      stroke="currentColor"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2.5"
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      />
    </svg>
  </a>
</template>

<script>
export default {
  name: 'ExternalLink',

  disableAxeAudit: true
}
</script>
