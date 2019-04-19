import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Tabbar, TabbarItem, Stepper, SubmitBar, Checkbox, CheckboxGroup, Card, Swipe, SwipeItem, Search, Tab, Tabs, Badge, BadgeGroup, Button } from 'vant'

Vue.use(Tabbar).use(TabbarItem).use(Stepper).use(SubmitBar).use(Checkbox).use(CheckboxGroup).use(Card).use(Swipe).use(SwipeItem).use(Search).use(Tab).use(Tabs).use(Badge).use(BadgeGroup).use(Button)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
