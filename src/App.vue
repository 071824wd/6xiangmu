<template>
  <div id="app">

    <router-view></router-view>
    <!-- <Header></Header> -->
  

    <headercom></headercom>
    <contentcom></contentcom>
    <footercom></footercom>

  </div>
</template>

<script>
import headercom from './components/headercom'
import contentcom from './components/contentcom'
import footercom from './components/footercom'

export default {
  name: 'app',
  components: {
    headercom,contentcom,footercom
  }
}
</script>

<style>
</style>
