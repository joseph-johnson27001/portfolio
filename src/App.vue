<template>
  <div id="app">
    <WelcomeAnimation />
  </div>
</template>

<script>
import WelcomeAnimation from "./components/WelcomeAnimation.vue";

export default {
  name: "App",
  components: {
    WelcomeAnimation,
  },
};
</script>

<style>
body {
  background-color: #1d1d20;
  font-family: "Montserrat";
}

#app {
  height: 100vh;
  color: white;
}
</style>
