import Vue from 'vue'
import VueAxe from '../vue-axe'
import App from './App.vue'
import router from './router.js'

// Don't use this plugin in production => if (process.env.NODE_ENV !== 'production')
Vue.use(VueAxe)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
