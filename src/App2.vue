<template>
  <div class="app2-container">
    <h1>App2 根组件</h1>
    <!-- 当安装和配置了 vue-router 后，就可以使用 router-link 来替代普通的 a 链接了 -->
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-link to="/movie/1">雷神</router-link>
    <router-link to="/movie/2">钢铁侠</router-link>
    <router-link to="/movie/3">奇异博士</router-link>

    <hr />
    <!-- 只要在项目中安装和配置了 vue-router 就可以使用 router-view 这个组件了 -->
    <!-- 它的作用很单纯：占位符 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less" scoped>
.app2-container {
  margin-top: 10px;
  background-color: #efefef;
  padding-bottom: 10px;
  a {
    padding: 5px;
  }
}
</style>
