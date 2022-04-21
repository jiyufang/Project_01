import Vue from 'vue'
import App from './App2.vue'
// 导入路由模块， 目的：拿到路由的实例对象
import router from '@/router'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 在 Vue 项目中，想要把路由用起来，必须把路由实例对象通过下面方式进行挂载
  router
}).$mount('#app')
