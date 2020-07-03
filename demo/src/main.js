import Vue from 'vue'
import VueAxe from '../vue-axe'
import App from './App.vue'
import router from './router'

// Use this plugin only development => if (process.env.NODE_ENV === 'development')
Vue.use(VueAxe)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
