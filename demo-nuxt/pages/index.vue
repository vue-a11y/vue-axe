<template>
  <div>
    <header>
      <logo
        :src="require('@/assets/logo.png')"
        :show-alt="showAlt"
      />
      <h1 data-va="main header">
        Welcome - Open your console
      </h1>
      <h2 style="color:#aaa;">
        Subtitle with low contrast
      </h2>
    </header>
    <main>
      <ul>
        <li>
          <nuxt-link
            to="/about"
            class="link-color"
            :class="{ 'link-color--corrected': correctedLinkColor }"
          >
            About
          </nuxt-link>
        </li>
        <li>
          <nuxt-link
            to="/contact"
            class="link-color"
            :class="{ 'link-color--corrected': correctedLinkColor }"
          >
            Contact
          </nuxt-link>
        </li>
        <li>
          <nuxt-link
            to="/test"
            class="link-color"
            :class="{ 'link-color--corrected': correctedLinkColor }"
          >
            Test counter
          </nuxt-link>
        </li>
      </ul>

      <!--<p>Number: {{num}}</p>-->
      <!--<p>Each time the number updates it's running a debounce function to call `axe-core` again.<br />It will only run run the debounce once per 5 seconds or 1 second after the last call.</p>-->
      <!--<p>Use this button to see the console update as you fix or break a11y rules.</p>-->
      <button
        @click="showAlt = !showAlt"
        v-text="showAlt ? 'Remove the alt tag from the logo' : 'Add an alt tag to the logo'"
      />
      <button @click="toggleLinkColor">
        Change links color
      </button>

      <table
        style="margin-top:50px;margin-bottom:20px;width:100%;"
        align="center"
      >
        <caption style="margin-bottom: 20px;">
          <strong>Table test: scope attribute in &lt;td&gt; tag to force error</strong>
        </caption>
        <thead>
          <tr>
            <th scope="col">
              Name
            </th>
            <th scope="col">
              1 mile
            </th>
            <th scope="col">
              5 km
            </th>
            <th scope="col">
              10 km
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">
              Mary
            </th>
            <td
              v-if="scope"
              scope="col"
            >
              8:32
            </td>
            <td v-else>
              8:32
            </td>
            <td>28:04</td>
            <td>1:01:16</td>
          </tr>
        </tbody>
      </table>
      <button @click="scope = !scope">
        {{ scope ? 'Remove' : 'Add' }} scope attribute from the &lt;td&gt; tag
      </button>
      <hr>
      <button @click="handleManualButton">
        Manual Button with clearConsole = true
      </button>
    </main>
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
      correctedLinkColor: false,
      showAlt: false,
      scope: true
    }
  },
  methods: {
    toggleLinkColor () {
      this.correctedLinkColor = !this.correctedLinkColor

      // Using "auto: false" $axe.run working
      // this.$axe.run()
    },

    handleManualButton () {
      this.$axe.run({
        clearConsole: true
      })
    }
  }
}
</script>

<style>
.link-color {
  color: #42b983;
}

.link-color--corrected {
  color: #00522D;
}
</style>
