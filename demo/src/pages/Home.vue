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
    <p>Number: {{num}}</p>
    <p>Each time the number updates it's running a debounce function to call `axe-core` again.<br />It will only run run the debounce once per 5 seconds or 1 second after the last call.</p>
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
        msg: 'Welcome - Open your console',
        num: 0
      }
    },
    mounted()
    {
      this.updateNumber();
    },
    methods: {
      updateNumber()
      {
        setTimeout(() => {
          this.num += 1;
          this.updateNumber();
        }, 500);
      }
    }
  }
</script>

<style scoped>

</style>
