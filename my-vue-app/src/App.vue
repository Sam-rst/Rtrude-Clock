<template>
  <body>
    <NavBar />
    <MyHome msg="Ceci est le projet" />
    <MyLiaison />
    <MyFooter />
  </body>
</template>


<script>

import NavBar from "./components/NavBar.vue";
import MyHome from "./components/MyHome.vue";
import MyFooter from "./components/MyFooter.vue";
import MyLiaison from "./components/MyLiaison.vue";

export default {
  name: "App",
  components: {
    NavBar,
    MyHome,
    MyFooter,
  },

};


</script>

<head>
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
</head>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
