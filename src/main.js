import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'scss/index.scss'
import 'scss/iconfont/iconfont.css'
import 'js/index.js'
import store from './store'
import 'mint-ui/lib/style.css'
import MintUI from 'mint-ui'
Vue.use(MintUI)
Vue.prototype.axios = axios;
Vue.use(VueAxios, axios)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})