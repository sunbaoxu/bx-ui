import Vue from 'vue'
import App from './App.vue'
import {router} from './router'
require('@/assets/css/reset.scss');
require('@/assets/css/common.scss');

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
