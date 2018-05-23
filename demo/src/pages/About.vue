<template>
  <div>
    <h1>About page</h1>
    <!-- Force aXe errors -->
    <section role="ljks">
      <p role="button">
        My content
        <router-link to="/">Go to Home</router-link>
        <router-link to="/contact">Contact</router-link>
      </p>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'About'
  }
</script>

<style scoped>

</style>