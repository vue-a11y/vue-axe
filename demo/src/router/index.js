import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      name: 'home',
      path: '/',
      component: () => import('@/views/Home'),
      meta: {
        announcer: 'Home page'
      }
    },
    {
      name: 'about',
      path: '/about',
      component: () => import('@/views/About'),
      meta: {
        announcer: 'About page'
      }
    },
    {
      name: 'contact',
      path: '/contact',
      component: () => import('@/views/Contact'),
      meta: {
        announcer: 'Contact page'
      }
    },
    {
      name: 'test',
      path: '/test',
      component: () => import('@/views/Test'),
      meta: {
        announcer: 'Test page'
      }
    }
  ]
})

export default router
