<template>
  <div>
    <img
      v-if="showAlt"
      :src="src"
      role="oisduhuo"
      alt="VueJS Logo"
    >
    <img
      v-else
      :src="src"
      role="oisduhuo"
    >
  </div>
</template>

<script>
export default {
  name: 'Logo',
  props: ['src', 'showAlt']
}
</script>
