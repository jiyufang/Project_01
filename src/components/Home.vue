<template>
  <div class="home-container">
    <h3>Home 组件</h3>
    <hr />
    <button @click="gotoLoki">通过 push 跳转到“洛基”页面</button>
    <button @click="gotoLoki2">通过 replace 跳转到“洛基”页面</button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    gotoLoki() {
      this.$router.push('/movie/1')
    },
    gotoLoki2() {
      this.$router.replace('/movie/2')
    }
  }
}
</script>

<style lang="less" scoped>
.home-container {
  background-color: pink;
  min-height: 200px;
}
</style>
