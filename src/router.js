import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/home',
      component: () => import('./views/Home.vue'),
      children: [
        { path: 'selling', component: () => import('./components/Selling.vue') },
        { path: 'specials', component: () => import('./components/Specials.vue') },
        { path: '', redirect: '/home/selling' }
      ]
    },
    { path: '/center', component: () => import('./views/Center.vue') },
    { path: '/sort', component: () => import('./views/Sort.vue') },
    { path: '/cart', component: () => import('./views/Cart.vue') },
    { path: '/city', component: () => import('./views/City.vue') },
    // { path: '*', redirect: '/home' }
  ]
})
