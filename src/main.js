// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import config from './config.js'
import axios from 'axios'
import utils from './utils/index.js'

Vue.config.productionTip = false
Vue.prototype.config = config
Vue.prototype.$axios = axios
Vue.prototype.utils = utils

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
