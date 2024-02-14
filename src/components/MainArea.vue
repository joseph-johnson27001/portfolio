<template>
  <div class="main-area-container" :class="{ 'fade-in': fadeIn }">
    <div class="information-container">
      <div
        class="text-container"
        :class="{ 'animate-out': animateOut, 'animate-in': animateIn }"
      >
        <h3 v-if="projectName != 'Darth Vader'" class="selected-name">
          {{ projectName }}
        </h3>
        <h3 v-else style="color: red" class="selected-name">
          {{ projectName }}
        </h3>
        <p>{{ projectDescription }}</p>
        <div class="button-container" v-if="projectName != 'Introduction'">
          <a
            v-if="projectName == 'Darth Vader'"
            :href="siteLink"
            target="_blank"
            ><button>Design Inspiration</button></a
          >
          <a :href="codeLink" target="_blank"><button>Code</button></a>
          <a :href="siteLink" target="_blank"><button>Demo</button></a>
        </div>
        <div class="button-container" v-else>
          <a href="mailto:joseph.johnson27001@gmail.com"
            ><button>Email</button></a
          >

          <a href="https://github.com/joseph-johnson27001" target="_blank"
            ><button>Github</button></a
          >
        </div>
      </div>
      <div class="selection-container">
        <h4 class="project-heading">Select A Project</h4>
        <ul>
          <li
            :class="{ active: projectName === 'YAY Movies!' }"
            @click="animateProject('YAY Movies!')"
          >
            YAY Movies!
          </li>
          <li
            :class="{ active: projectName === 'Cloud Crypto' }"
            @click="animateProject('Cloud Crypto')"
          >
            Cloud Crypto
          </li>
          <li
            :class="{ active: projectName === 'Pokédex' }"
            @click="animateProject('Pokédex')"
          >
            Pokédex
          </li>
          <li
            :class="{
              active: projectName === 'Darth Vader',
              redText: projectName === 'Darth Vader',
            }"
            @click="animateProject('Darth Vader')"
          >
            Darth Vader Portfolio
          </li>
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
      projectName: "Introduction",
      projectDescription:
        "Welcome to my portfolio! As a passionate web developer, I've crafted various projects showcasing my skills and creativity. From immersive movie databases to comprehensive cryptocurrency trackers, explore my work and discover the magic of technology.",
      fadeIn: false,
      animateOut: false,
      animateIn: false,
      projectDescriptions: {
        "YAY Movies!":
          "Crafted using Vue.js and the Movie Database (TMDb) API, my movie database project offers a user-friendly interface to explore trending, top-rated, upcoming, and new release movies. With seamless navigation and dynamic search capabilities, users can effortlessly discover detailed movie information, including ratings, genres, and production details. Experience the magic of cinema with this immersive movie database.",
        Pokédex:
          "Introducing my Pokédex project, engineered with Vue.js and optimized through the PokeAPI. This application grants users full access to every generation of Pokémon, facilitating swift and thorough searches for in-depth creature information. Designed with a keen eye for technical accuracy and seamless functionality, users can delve into a plethora of data encompassing abilities, creature statistics, and other crucial details, ensuring a comprehensive exploration of the Pokémon universe.",
        "Cloud Crypto":
          "Introducing my cryptocurrency tracking application, affectionately named after the place where it all began - Cloud Coffee. Developed using React.js, and powered by Rapid API, Bing News API, and Chart.js, this comprehensive tool offers real-time exchange information and curated news updates for the top 100 cryptocurrencies.",
        "Darth Vader":
          " Inspired by the iconic Star Wars character, my portfolio project offers a unique twist on a classic web design found online. Created using pure vanilla JavaScript, this project showcases my ability to incorporate custom graphics and animations with a Star Wars theme.",
      },
      YAYMoviesCodeLink:
        "https://github.com/joseph-johnson27001/movie_database",
      pokedexCodeLink: "https://github.com/joseph-johnson27001/Pok-dex",
      cryptoCodeLink:
        "https://github.com/joseph-johnson27001/cryptocurrency_tracker",
      darthVaderCodeLink:
        "https://github.com/joseph-johnson27001/Darth-Vader-Portfolio",
      YAYMoviesSite: "#",
      pokedexSite: "#",
      darthVaderSite: "#",
      cloudCryptoSite: "https://cloud-crypto.netlify.app/",
    };
  },
  computed: {
    codeLink() {
      if (this.projectName === "YAY Movies!") {
        return this.YAYMoviesCodeLink;
      } else if (this.projectName === "Pokédex") {
        return this.pokedexCodeLink;
      } else if (this.projectName === "Cloud Crypto") {
        return this.cryptoCodeLink;
      } else if (this.projectName === "Darth Vader") {
        return this.darthVaderCodeLink;
      }
      return "#";
    },
    siteLink() {
      if (this.projectName === "YAY Movies!") {
        return this.YAYMoviesSite;
      } else if (this.projectName === "Pokédex") {
        return this.pokedexSite;
      } else if (this.projectName === "Cloud Crypto") {
        return this.cloudCryptoSite;
      } else if (this.projectName === "Darth Vader") {
        return this.darthVaderSite;
      }
      return "#";
    },
  },
  methods: {
    animateProject(projectName) {
      if (!this.animateOut && !this.animateIn) {
        this.animateOut = true;
        setTimeout(() => {
          this.projectName = projectName;
          this.projectDescription = this.projectDescriptions[projectName];
          this.animateIn = true;
          this.animateOut = false;
          setTimeout(() => {
            this.animateOut = false;
            this.animateIn = false;
          }, 500);
        }, 300);
      }
    },
  },
  mounted() {
    setTimeout(() => {
      this.fadeIn = true;
    }, 100);
  },
};
</script>

<style scoped>
h3 {
  font-weight: 100;
}

.project-heading {
  color: white;
  font-weight: 100;
}
.main-area-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  opacity: 0;
  transition: opacity 1.5s ease;
}

.fade-in {
  opacity: 1;
}

.information-container {
  display: grid;
  grid-template-columns: 2fr 1fr;
  text-align: justify;
  height: 200px;
  padding: 0px 10px;
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

.button-container {
  display: flex;
  gap: 10px;
  justify-content: flex-end;
}

.button-container button {
  background-color: transparent;
  color: #d1d1d1;
  border: 1px solid #d1d1d1;
  border-radius: 4px;
  padding: 10px;
  cursor: pointer;
  font-weight: 100;
  font-family: "Montserrat";
  position: relative;
}

.button-container button:hover {
  border-color: gold;
  color: gold;
}

.selection-container {
  display: flex;
  flex-direction: column;
  text-align: end;
}

ul {
  padding-left: 0px;
  margin-top: 2px;
}

li {
  cursor: pointer;
  margin-bottom: 10px;
  font-size: 0.95em;
  line-height: 1.2;
  list-style-type: none;
}

li:hover:not(.active) {
  color: white;
}

.active {
  color: gold;
}

.redText {
  color: red;
}

.text-container {
  opacity: 1;
  transform: translateX(0);
  transition: opacity 0.4s ease, transform 0.4s ease;
}

.text-container.animate-out {
  opacity: 0;
  transform: translateX(-50%);
}

.text-container.animate-in {
  opacity: 1;
  transform: translateX(0);
}
</style>
