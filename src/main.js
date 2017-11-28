// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import axios from 'axios'
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'

Vue.prototype.$axios = axios

// Require dependencies

// var VueCookie = require('vue-cookie');
// Tell Vue to use the plugin
// Vue.use(VueCookie);

Vue.config.productionTip = false

// 路由跳转
// Vue.prototype.$goRoute = function (index) {
//   this.$router.push(index)
// }

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
