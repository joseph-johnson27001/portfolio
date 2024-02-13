<template>
  <div class="main-area-container">
    <div class="information-container">
      <div class="text-container">
        <h3 class="selected-name">{{ projectName }}</h3>
        <p>{{ projectDescription }}</p>
        <!-- Buttons for demo and for code -->
      </div>
      <div class="selection-container">
        <h3>Projects</h3>
        <ul>
          <li>YAY Movies!</li>
          <li>Cloud Crypto</li>
          <li>Pokédex</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainArea",
  inject: ["state"],
  data() {
    return {
      projectName: "YAY Movies!",
      projectDescription:
        "Crafted using Vue.js and the Movie Database (TMDb) API, my movie database project offers a user-friendly interface to explore trending, top-rated, upcoming, and new release movies. With seamless navigation and dynamic search capabilities, users can effortlessly discover detailed movie information, including ratings, genres, and production details. Experience the magic of cinema with this immersive movie database.",
    };
  },
};
</script>

<style scoped>
h3 {
  font-weight: 100;
}
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
  text-align: justify;
}

.text-container h3 {
  color: gold;
}

.text-container p {
  font-size: 0.9em;
  line-height: 1.6;
  margin-left: 20px;
  border-left: 1px solid #d1d1d1;
  padding-left: 30px;
}

.selection-container {
  display: flex;
  flex-direction: column;
  text-align: center;
}

ul {
  padding-left: 0px;
}

li {
  cursor: pointer;
  margin-bottom: 10px;
  list-style-type: none;
}

li:hover {
  color: gold;
}
</style>
