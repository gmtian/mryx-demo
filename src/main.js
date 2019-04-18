import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Tabbar, TabbarItem, Stepper, SubmitBar, Checkbox, CheckboxGroup, Card  } from 'vant'

Vue.use(Tabbar).use(TabbarItem).use(Stepper).use(SubmitBar).use(Checkbox).use(CheckboxGroup).use(Card)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
