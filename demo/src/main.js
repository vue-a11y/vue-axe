import Vue from 'vue'
import App from './App.vue'
import VueAxe from '../vue-axe'

if (process.env.NODE_ENV !== 'production') {
  Vue.use(VueAxe, {
    config: {
      rules: [
        { id: 'heading-order', enabled: true },
        { id: 'label-title-only', enabled: true },
        { id: 'link-in-text-block', enabled: true },
        { id: 'region', enabled: true },
        { id: 'skip-link', enabled: true },
        { id: 'help-same-as-label', enabled: true }
      ]
    }
  })
  Vue.config.productionTip = false
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
