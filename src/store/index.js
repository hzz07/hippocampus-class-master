import Vue from 'vue'
import Vuex from 'vuex'

import BasicInfor from './BasicInfor/index'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    BasicInfor
  }
})

export default store