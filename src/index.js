import useVueAxe from './composables/useVueAxe'

export default function install (app, options = {}) {
  if (typeof window === 'undefined') return
  useVueAxe(options).registerPlugin(app)
}

export { default as VueAxePopup } from './components/Popup.vue'
