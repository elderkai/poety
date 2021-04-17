import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/index'
import settings from '@/views/setttings'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/settings',
      name: 'settings',
      component: settings
    },
  ]
})
