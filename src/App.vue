<template>
  <!--
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  -->
  <div>
    <TopBar msg=""/>
  <Features msg=""/>
  </div>
  
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import TopBar from './components/TopBar.vue'
import Features from './components/Features.vue'

export default {
  name: 'App',
  components: {
    //HelloWorld,
    TopBar,
    Features
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
