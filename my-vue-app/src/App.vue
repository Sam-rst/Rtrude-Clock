<template>
  <NavBar msg="Bonjour" />
  <MyHome msg="Ceci est le projet"/>
  
</template>

<script>
import MyHome from './components/MyHome.vue';
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',
  components: {
    MyHome,
    NavBar
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
