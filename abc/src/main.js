// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//import VueResource from 'vue-resource';
import axios from 'axios'
//Vue.use(VueResource);
require('./assets/css/style.css')
Vue.config.productionTip = false;
Vue.prototype.$http = axios 
// 这时候如果在其它的组件中，是无法使用 axios 命令的 
//其他页面在使用axios的时候直接  this.$http就可以了
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
