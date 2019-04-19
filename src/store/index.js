import Vue from 'vue'
import Vuex from 'vuex'
import cat from './cat'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    cat
  }
})


export default store
