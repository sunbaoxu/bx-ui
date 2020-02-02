import Vue from 'vue'
import App from './App.vue'
import {router} from './router'
require('@/assets/css/reset.css');
require('@/assets/css/common.scss');

console.log(router,'aaaaaa')

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
