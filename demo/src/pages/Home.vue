<template>
  <div>
    <logo :src="require('@/assets/logo.png')" />
    <h1 data-va="main header">{{ msg }}</h1>
    <h2>Access Pages</h2>
    <ul>
      <li>
        <router-link to="/about">About</router-link>
      </li>
       <li>
        <router-link to="/contact">Contact</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import Logo from '@/components/Logo'
  
  export default {
    name: 'Home',
    components: {
      Logo
    },
    data () {
      return {
        msg: 'Welcome - Open your console'
      }
    }
  }
</script>

<style scoped>

</style>