import Vue from 'vue'
import App from './App.vue'
import router from './router.js'

if (process.env.NODE_ENV !== 'production') {
  const VueAxe = require('../vue-axe').default
  Vue.use(VueAxe, {
    clearConsoleOnUpdate: true
  })
}
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
