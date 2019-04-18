import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: () => import('./views/Index.vue'),
      children: [
        {
          path: 'home',
          component: () => import('./views/Home.vue'),
          children: [
            { path: 'selling', component: () => import('./components/Selling.vue') },
            { path: 'specials', component: () => import('./components/Specials.vue') },
            { path: '', redirect: '/selling' }
          ]
        },
        { path: 'center', component: () => import('./views/Center.vue') },
        { path: 'sort', component: () => import('./views/Sort.vue') },
        { path: 'cart', component: () => import('./views/Cart.vue') },
        { path: '', redirect: '/home/selling' }
      ]
    },
    { path: '/city', component: () => import('./views/City.vue') },
    { path: '/login', component: () => import('./views/Login.vue') },
    { path: '/home/:id', name: 'detail', component: () => import('./views/Detail.vue') },
    { path: '*', redirect: '/home/selling' }
  ]
})
