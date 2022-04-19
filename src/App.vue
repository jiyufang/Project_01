<template>
  <div class="app-container">
    <h1>APP 根组件</h1>
    <a href="#/home">首页</a>
    <a href="#/movie">电影</a>
    <a href="#/about">关于</a>
    <hr />
    <!-- <Home></Home>
    <Movie></Movie>
    <About></About> -->
    <!-- 动态组件 -->
    <component :is="conName"></component>
  </div>
</template>

<script>
import Home from '@/components/Home.vue'
import Movie from '@/components/Movie.vue'
import About from '@/components/About.vue'
export default {
  data() {
    return {
      conName: 'Home'
    }
  },
  created() {
    //只要当前的App 组件一被创建，就立即监听 window 对象的 onhashchange 事件
    window.onhashchange = () => {
      console.log('监听到了 hash 地址的变化', location.hash)
      switch (location.hash) {
        case '#/home':
          this.conName = 'Home'
          break
        case '#/movie':
          this.conName = 'Movie'
          break
        case '#/about':
          this.conName = 'About'
      }
    }
  },
  components: {
    Home,
    Movie,
    About
  }
}
</script>

<style lang="less" scoped>
.app-container {
  a {
    padding: 5px;
  }
}
</style>
