<template>

  <body>

    <NavBar />
    <MyHome msg="Ceci est le projet" />
    <MyFooter />

  </body>

</template>

<script>

import NavBar from "./components/NavBar.vue";
import MyHome from "./components/MyHome.vue";
import MyFooter from "./components/MyFooter.vue";

export default {
  name: "App",
  components: {
    NavBar,
    MyHome,
    MyFooter,
  },
};

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
