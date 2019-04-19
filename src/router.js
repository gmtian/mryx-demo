import Vue from 'vue'
import VueRouter from 'vue-router'

window.isLogin = false

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
          meta: { tabNumber: 0 },
          children: [
            { path: 'selling', component: () => import('./components/Selling.vue') },
            { path: 'specials', component: () => import('./components/Specials.vue') },
            { path: '', redirect: '/selling' },
            { path: '*', redirect: '/selling' }
          ]
        },
        { path: 'category', component: () => import('./views/Category.vue'), meta: { tabNumber: 1 } },
        { path: 'cart', component: () => import('./views/Cart.vue'), meta: { tabNumber: 2 } },
        { path: 'user', component: () => import('./views/User.vue'), meta: { tabNumber: 3 } },
        { path: '', redirect: '/home' }
      ]
    },
    { path: '/city', component: () => import('./views/City.vue') },
    { path: '/login', component: () => import('./views/Login.vue') },
    { path: '/home/:id', name: 'detail', component: () => import('./views/Detail.vue') },
    {
      path: '/yue',
      component: () => import('./views/Yue.vue'),
      beforeEnter: (to, from, next) => {
        if (!window.isLogin) {
          next({
            path: '/login',
            query: {
              redirect: to.fullPath
            }
          })
        } else {
          next()
        }
      }
    },
    {
      path: '/hongbao',
      component: () => import('./views/Hongbao.vue'),
      beforeEnter: (to, from, next) => {
        if (!window.isLogin) {
          next({
            path: '/login',
            query: {
              redirect: to.fullPath
            }
          })
        } else {
          next()
        }
      }
    },
    {
      path: '/shangpin',
      component: () => import('./views/Shangpin.vue'),
      beforeEnter: (to, from, next) => {
        if (!window.isLogin) {
          next({
            path: '/login',
            query: {
              redirect: to.fullPath
            }
          })
        } else {
          next()
        }
      }
    },
    {
      path: '/jifen',
      component: () => import('./views/Jifen.vue'),
      beforeEnter: (to, from, next) => {
        if (!window.isLogin) {
          next({
            path: '/login',
            query: {
              redirect: to.fullPath
            }
          })
        } else {
          next()
        }
      }
    },
    { path: '*', redirect: '/home/selling' }
  ]
})
