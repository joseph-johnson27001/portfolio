<template>
  <div id="app">
    <WelcomeAnimation />
    <MainArea />
  </div>
</template>

<script>
import WelcomeAnimation from "./components/WelcomeAnimation.vue";
import MainArea from "./components/MainArea.vue";

export default {
  name: "App",
  components: {
    WelcomeAnimation,
    MainArea,
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
  max-width: 1200px;
  margin: auto;
}
</style>
