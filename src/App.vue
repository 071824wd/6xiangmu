<template>
  <div id="app">
    <router-view></router-view>
    <!-- <Header></Header> -->
  </div>
</template>

<script>
import Header from "./components/header"
export default {
  name: 'app',
  components: {
   Header
  }
}
</script>

<style>
#app {
  width: 100%;
  /* font-size:.16rem; */
  height: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}
</style>
