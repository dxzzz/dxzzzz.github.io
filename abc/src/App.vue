<template>
  <div id="app" class="container">
    <navVue></navVue>
        <router-view>
        </router-view>
  </div>
</template>
<script>
import navVue from './components/Nav.vue'
export default {
    name: 'app',
    components: {
        navVue
    }
}
</script>
<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}
</style>
