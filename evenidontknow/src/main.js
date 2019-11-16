import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './Routes'

import './style.scss';

Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
