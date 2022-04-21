<template>
  <div class="about-container">
    <h3>About 组件</h3>
    <!-- 子级路由链接 -->
    <router-link to="/about/tab1">tab1</router-link>
    <router-link to="/about/tab2">tab2</router-link>
    <hr />
    <!-- 子级路由占位符 -->
    <router-view></router-view>
  </div>
</template>
<script>
export default {}
</script>

<style lang="less" scoped>
.about-container {
  background-color: skyblue;
  min-height: 200px;
  a {
    padding: 0 5px;
  }
}
</style>
