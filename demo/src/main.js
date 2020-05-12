import Vue from 'vue'
import VueAxe from '../vue-axe'
import App from './App.vue'
import router from './router.js'

// Use this plugin only in development => if (process.env.NODE_ENV !== 'production')
Vue.use(VueAxe, {
  clearConsoleOnUpdate: true
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
