<template>
  <div>
    <header>
      <h1>Demo page</h1>
    </header>
    <main>
      <p>The number is: {{ number }}</p>
      <button @click="plus(1)">
        Plus +1
      </button>
      <p
        v-if="number >= 5"
        class="highNumberWarning"
      >
        HIGH NUMBER!
      </p>

      <p
        v-if="number >= 10"
        class="highNumberWarning"
      >
        HIGH NUMBER!
      </p>
    </main>
  </div>
</template>

<script>
export default {
  data () {
    return {
      number: 0
    }
  },
  methods: {
    plus (value) {
      this.number += value
      console.log(`We added ${value}, making the new value ${this.number}`)
    }
  }
}
</script>

<style scoped>
.highNumberWarning {
  color: #f3f3f3;
}
</style>
