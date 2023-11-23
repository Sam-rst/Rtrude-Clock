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
    MyLiaison,
    MyFooter,
  },
};

</script>

<style>
</style>
