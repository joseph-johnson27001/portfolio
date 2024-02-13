<template>
  <div v-show="!shouldShowAnimation" class="main-area-container">
    <div class="information-container">
      <div class="text-container">
        <p>TEXT GOES HERE</p>
      </div>
      <div class="selection-container">
        <ul>
          <li>Item One</li>
          <li>Item Two</li>
          <li>Item Three</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainArea",
  inject: ["state"],
  computed: {
    shouldShowAnimation() {
      console.log(this.state.showAnimation);
      return this.state.showAnimation;
    },
  },
};
</script>

<style scoped>
.main-area-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.information-container {
  display: grid;
  grid-template-columns: 2fr 1fr;
}

.selection-container {
  display: flex;
  flex-direction: column;
}

li {
  cursor: pointer;
  padding-bottom: 10px;
}
</style>
