// 在src/router/index.js就是当前项目的路由模块
// 1.导入 Vue 和 VueRouter 的包
import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入各个组件
import Home from '@/components/Home.vue'
import About from '@/components/About.vue'
import Movie from '@/components/Movie.vue'
import tab1 from '@/components/tabs/tab1.vue'
import tab2 from '@/components/tabs/tab2.vue'

// 2. 调用 Vue.use() 函数，把 VueRouter 安装为 Vue 的插件
Vue.use(VueRouter)

// 3. 创建路由的实例对象
const router = new VueRouter({
  // routes 是一个数组，作用：定义 “hash 地址“ 与 “组件” 之间的对应关系
  routes: [
    // 重定向的路由规则
    { path: '/', redirect: '/home' },
    // 路由规则
    { path: '/home', component: Home },
    {
      path: '/about',
      component: About,
      redirect: '/about/tab1',
      children: [
        { path: 'tab1', component: tab1 },
        { path: 'tab2', component: tab2 }
      ]
    },
    // 可以为路由规则开启 props 传参，从而方便的拿到动态参数的值
    { path: '/movie/:mid', component: Movie, props: true }
  ]
})

// 4. 向外共享路由的实例对象
export default router
