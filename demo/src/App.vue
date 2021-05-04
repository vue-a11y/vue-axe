<template>
  <main>
    <img
      :alt="showAlt ? 'Vue logo' : null"
      style="width: 200px"
      src="./assets/vue-a11y-logo.png"
    >
    <div>
      <button @click="showAlt = !showAlt">
        {{ showAlt ? 'Remove' : 'Add' }} alt image in logo
      </button>
    </div>
    <hr>
    <table
      style="margin-top:50px;margin-bottom:20px;width:100%;"
      align="center"
    >
      <caption style="margin-bottom: 20px;">
        <strong>Table test: scope attribute in &lt;td&gt; tag to force error</strong>
      </caption>
      <thead>
        <tr>
          <th
            scope="col"
            style="color: #f2f2f2"
          >
            Name
          </th>
          <th
            scope="col"
            style="color: #ccc"
          >
            1 mile
          </th>
          <th
            scope="col"
            style="color: #ddd"
          >
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
  </main>
</template>

<script setup>
import { ref } from 'vue'

const showAlt = ref(true)
const scope = ref(false)

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
