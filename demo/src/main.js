import Vue from 'vue'
import VueAxe from '../vue-axe'
import App from './App.vue'
import router from './router'

// Don't use this plugin in production => if (process.env.NODE_ENV !== 'production')
Vue.use(VueAxe)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
