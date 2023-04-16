<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script setup>
</script>
<style lang="less">
* {
  margin: 0;
  padding: 0;
}

#app {
  width: 100vw;
  min-height: 100vh;
  overflow-x: hidden;
  -webkit-user-select: none;
  user-select: none;
}

a {
  text-decoration: none;
}

li {
  list-style: none;
}
</style>
