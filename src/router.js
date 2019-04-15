import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    { path: '/home', component: () => import('./views/Home.vue') },
    { path: '/center', component: () => import('./views/Center.vue') },
    { path: '/sort', component: () => import('./views/Sort.vue') },
    { path: '/cart', component: () => import('./views/Cart.vue') }
  ]
})
