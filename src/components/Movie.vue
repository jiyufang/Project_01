<template>
  <div class="movie-container">
    <!-- this.$route 是路由的 “参数对象” -->
    <!-- this.$router 是路由的 “导航对象” -->
    <h3>Movie 组件 ------{{ $route.params.mid }}-----{{ mid }}</h3>
    <button @click="showThis">打印</button>
    <button @click="goBack">go 后退</button>
    <button @click="$router.back()">goback 后退</button>
    <button @click="$router.forward()">goback 前进</button>
  </div>
</template>

<script>
export default {
  name: 'Movie',
  props: ['mid'],
  methods: {
    showThis() {
      console.log(this)
    },
    goBack() {
      // 后退到之前的组件页面
      // go(-1) 表示后退一层
      // 如果后退的层数超过上限，则原地不动
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="less" scoped>
.movie-container {
  background-color: orchid;
  min-height: 200px;
}
</style>
