<template>
  <div class="movie-container">
    <!-- this.$route 是路由的 “参数对象” -->
    <!-- this.$router 是路由的 “导航对象” -->
    <h3>Movie 组件 ------{{ $route.params.mid }}-----{{ mid }}</h3>
    <button @click="showThis">打印</button>
  </div>
</template>

<script>
export default {
  props:['mid'],
  methods: {
    showThis() {
      console.log(this)
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
