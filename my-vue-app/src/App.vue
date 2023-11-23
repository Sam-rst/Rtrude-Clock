<template>
  <NavBar msg="Bonjour" />
  <MyHome msg="Ceci est le projet"/>
  <MyFooter msg="Ceci est mon pied"/>
</template>

<script>
import MyFooter from './components/MyFooter.vue';
import MyHome from './components/MyHome.vue';
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',
  components: {
    MyHome,
    NavBar,
    MyFooter
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
