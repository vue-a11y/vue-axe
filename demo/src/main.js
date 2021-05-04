import { h, Fragment, createApp } from 'vue'
import App from './App.vue'
import VueAxe, { VueAxePopup } from '../../src'

createApp({
  render: () => h(Fragment, [h(App), h(VueAxePopup)])
})
  .use(VueAxe)
  .mount('#app')
