<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="13.2"
    height="6.7"
    focusable="false"
    aria-hidden="true"
  >
    <path
      :d="right ? 'M9.8.7l2.7 2.7m0 0L9.8 6m2.7-2.6H.5' : 'M3.4 6L.7 3.4m0 0L3.4.7M.7 3.4h12'"
      fill="none"
      stroke="#000"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script>
export default {
  props: {
    right: Boolean
  }
}
</script>
