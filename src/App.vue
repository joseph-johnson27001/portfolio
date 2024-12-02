<template>
  <div id="app">
    <WelcomeAnimation v-if="shouldShowAnimation" />
    <MainArea v-else />
  </div>
</template>

<script>
import WelcomeAnimation from "./components/WelcomeAnimation.vue";
import MainArea from "./components/MainArea.vue";

export default {
  name: "App",
  inject: ["state"],
  components: {
    WelcomeAnimation,
    MainArea,
  },
  computed: {
    shouldShowAnimation() {
      return this.state.showAnimation;
    },
  },
};
</script>

<style>
body {
  background-color: #1d1d20;
  font-family: "Montserrat";
  margin: 0px;
}

#app {
  height: 100vh;
  color: #d1d1d1;
  max-width: 1000px;
  margin: auto;
}
</style>
