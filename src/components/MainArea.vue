<template>
  <div class="main-area-container" :class="{ 'fade-in': fadeIn }">
    <div class="information-container">
      <div
        class="text-container"
        :class="{ 'animate-out': animateOut, 'animate-in': animateIn }"
      >
        <h2 v-if="projectName != 'Darth Vader'">
          {{ projectName }}
        </h2>
        <h2 v-else style="color: red">
          {{ projectName }}
        </h2>
        <p>{{ projectDescription }}</p>
        <div class="button-container" v-if="projectName != 'Introduction'">
          <a
            v-if="projectName == 'Darth Vader'"
            :href="darthVaderInspirationLink"
            target="_blank"
            ><button>Design Inspiration</button></a
          >
          <a :href="projectLinks.codeLink" target="_blank"
            ><button>Code</button></a
          >
          <a :href="projectLinks.siteLink" target="_blank"
            ><button>Demo</button></a
          >
        </div>

        <div class="button-container" v-else>
          <a href="mailto:joseph.johnson27001@gmail.com"
            ><button>Email</button></a
          >
          <a
            href="https://www.linkedin.com/in/joe-johnson-619533206/"
            target="_blank"
            ><button>LinkedIn</button></a
          >

          <a href="https://github.com/joseph-johnson27001" target="_blank"
            ><button>Github</button></a
          >
        </div>
      </div>
      <div class="selection-container">
        <h3 class="project-heading">Projects</h3>
        <ul>
          <li
            :class="{ active: projectName === 'Premier League Tracker' }"
            @click="animateProject('Premier League Tracker')"
          >
            Premier League Tracker
          </li>
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
            }"
            @click="animateProject('Darth Vader')"
          >
            Darth Vader Portfolio
          </li>
          <li
            :class="{
              active: projectName === 'Cliché Business Company',
            }"
            @click="animateProject('Cliché Business Company')"
          >
            Cliché Business Company
          </li>
        </ul>
        <div class="icons fade-in" v-if="projectName != 'Introduction'">
          <!-- Email Icon -->
          <a href="mailto:joseph.johnson27001@gmail.com">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="30"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M21 3H3a2 2 0 00-2 2v14a2 2 0 002 2h18a2 2 0 002-2V5a2 2 0 00-2-2zM5 7l7 4 7-4M5 17v-7.5l7 4 7-4V17"
              />
            </svg>
          </a>

          <!-- LinkedIn Icon -->
          <a
            href="https://www.linkedin.com/in/joe-johnson-619533206/"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 50 50"
            >
              <path
                fill="currentColor"
                d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"
              ></path>
            </svg>
          </a>

          <!-- GitHub Icon -->
          <a href="https://github.com/joseph-johnson27001" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 .297C5.382.297 0 5.678 0 12.594c0 5.281 3.438 9.75 8.207 11.344.6.11.793-.258.793-.574 0-.282-.01-1.022-.015-2.004-3.348.727-4.042-1.547-4.042-1.547-.546-1.387-1.332-1.756-1.332-1.756-1.09-.745.083-.73.083-.73 1.205.086 1.838 1.24 1.838 1.24 1.07 1.836 2.807 1.305 3.494.998.108-.775.418-1.305.76-1.605-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.465-2.383 1.236-3.223-.124-.303-.537-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.53 11.53 0 013.016-.41c1.023.006 2.05.137 3.016.41 2.29-1.552 3.297-1.23 3.297-1.23.655 1.652.24 2.873.116 3.176.77.84 1.235 1.913 1.235 3.223 0 4.61-2.805 5.622-5.475 5.92.43.373.81 1.106.81 2.228 0 1.608-.015 2.898-.015 3.292 0 .318.192.691.8.573C20.566 22.344 24 17.875 24 12.594 24 5.678 18.618.297 12 .297z"
              />
            </svg>
          </a>
        </div>
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
        "Premier League Tracker":
       "Currently in development, this app keeps you updated with the latest news and events in the Premier League. Built using Vue.js (Vue3), it aggregates and displays news for all Premier League teams in a user-friendly format. The app is set to feature real-time updates with the activation of APIs upon final release. Explore team news, match updates, and more in this comprehensive football tracker" "Cliché Business Company":
          "This project is a tongue-in-cheek representation of a typical business landing page, developed using HTML, CSS, and JavaScript. Embracing the clichés of corporate websites, it features all the classic elements you'd expect – from stock photos of smiling employees to buzzword-filled mission statements.",
        "YAY Movies!":
          "Crafted using Vue.js and the Movie Database (TMDb) API, this movie database project provides a user-friendly interface for exploring trending, top-rated, upcoming, and new release movies. Users can effortlessly access detailed movie information, including ratings, genres, and production details. It offers a straightforward and convenient way to immerse yourself in the world of movies.",
        Pokédex:
          "Introducing my Pokédex project, engineered with Vue.js and optimized through the PokeAPI. This application grants users full access to every generation of Pokémon, facilitating swift and thorough searches for in-depth creature information. Designed with a keen eye for technical accuracy and seamless functionality, users can delve into a plethora of data encompassing abilities, creature statistics, and other crucial details, ensuring a comprehensive exploration of the Pokémon universe.",
        "Cloud Crypto":
          "Introducing my cryptocurrency tracking application, named after the place where it all began - Cloud Coffee. Developed using React.js, and powered by Rapid API, Bing News API, and Chart.js, this comprehensive tool offers real-time exchange information and curated news updates for the top 100 cryptocurrencies.",
        "Darth Vader":
          "Inspired by the iconic Star Wars character, this Darth Vader portfolio offers a unique twist on a web design found online. Created using pure vanilla JavaScript, this project showcases my ability to incorporate custom graphics and animations with a Star Wars theme.",
        Introduction:
          "Welcome to my portfolio! As a passionate web developer, I've crafted various projects showcasing my skills and creativity. From immersive movie databases to comprehensive cryptocurrency trackers, explore my work and discover the magic of technology.",
      },
      PremierLeagueCodeLink:
        "https://github.com/joseph-johnson27001/my-football",
      ClicheCodeLink:
        "https://github.com/joseph-johnson27001/Business-Landing-Page",
      YAYMoviesCodeLink:
        "https://github.com/joseph-johnson27001/movie_database",
      pokedexCodeLink: "https://github.com/joseph-johnson27001/Pok-dex",
      cryptoCodeLink:
        "https://github.com/joseph-johnson27001/cryptocurrency_tracker",
      darthVaderCodeLink:
        "https://github.com/joseph-johnson27001/Darth-Vader-Portfolio",
      darthVaderInspirationLink:
        "https://dribbble.com/shots/11199542-Neteor-Web-Designer-Portfolio-HTML5/attachments/2805050?mode=media",
      PremierLeagueSite: "https://my-football.netlify.app/",
      YAYMoviesSite: "https://yay-movies-database.netlify.app",
      pokedexSite: "https://pokedex-database.netlify.app/",
      darthVaderSite: "https://darth-vader-portfolio.netlify.app/",
      cloudCryptoSite: "https://cloud-crypto.netlify.app/",
      clicheSite: "https://cliche-business-company.netlify.app/",
    };
  },
  computed: {
    projectLinks() {
      let links = {};
      if (this.projectName === "YAY Movies!") {
        links.codeLink = this.YAYMoviesCodeLink;
        links.siteLink = this.YAYMoviesSite;
      } else if (this.projectName === "Premier League Tracker") {
        links.codeLink = this.PremierLeagueCodeLink;
        links.siteLink = this.PremierLeagueSite;
      } else if (this.projectName === "Pokédex") {
        links.codeLink = this.pokedexCodeLink;
        links.siteLink = this.pokedexSite;
      } else if (this.projectName === "Cloud Crypto") {
        links.codeLink = this.cryptoCodeLink;
        links.siteLink = this.cloudCryptoSite;
      } else if (this.projectName === "Darth Vader") {
        links.codeLink = this.darthVaderCodeLink;
        links.siteLink = this.darthVaderSite;
      } else if (this.projectName === "Cliché Business Company") {
        links.codeLink = this.ClicheCodeLink;
        links.siteLink = this.clicheSite;
      } else {
        links.codeLink = "#";
        links.siteLink = "#";
      }
      return links;
    },
  },
  methods: {
    animateProject(projectName) {
      if (!this.animateOut && !this.animateIn) {
        if (projectName === "Introduction") {
          const icon = document.querySelector(".icons");
          if (icon) {
            icon.classList.add("fade-out");
          }
        }
        this.animateOut = true;
        setTimeout(() => {
          this.projectName = projectName;
          this.projectDescription = this.projectDescriptions[projectName];
          this.animateIn = true;
          this.animateOut = false;
          setTimeout(() => {
            if (projectName === "Introduction") {
              const icon = document.querySelector(".icons");
              if (icon) {
                icon.classList.remove("fade-out");
              }
            }
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
a {
  text-decoration: none;
  color: inherit;
}

a:hover {
  text-decoration: none;
  color: inherit;
}
h2,
h3 {
  font-weight: 100;
}

.project-heading {
  color: gold;
}
.main-area-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  opacity: 0;
  transition: opacity 1s ease;
}

.fade-in {
  opacity: 1;
}

.information-container {
  display: grid;
  grid-template-columns: 8fr 3fr;
  text-align: justify;
  height: 200px;
  padding: 0px 20px;
}

.text-container h2 {
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
  transition: border-color 0.1s linear, color 0.1s linear;
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
  margin-bottom: 0px;
}

li {
  cursor: pointer;
  margin-bottom: 12px;
  font-size: 0.95em;
  line-height: 1.4;
  list-style-type: none;
  transition: color 0.1s linear;
}

li:hover:not(.active) {
  color: white;
}

.active {
  color: white;
  font-weight: 400;
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

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.icons {
  cursor: pointer;
  margin-right: 10px;
  height: 100%;
  animation-duration: 0.5s;
  animation-fill-mode: both;
}

.icons a svg {
  fill: #d1d1d1;
  width: 24px;
  height: 24px;
  margin-top: 100%;
  animation-duration: 0.5s;
  animation-fill-mode: both;
  transition: transform 0.2s linear, fill 0.2s linear;
  padding: 5px;
}

.icons a svg:hover {
  transform: scale(1.05);
  color: white;
}

.fade-in {
  animation-name: fadeIn;
}

.fade-out {
  animation-name: fadeOut;
}

@media screen and (max-width: 768px) {
  .information-container {
    display: block;
    height: auto;
    padding: 20px;
  }

  .text-container {
    max-width: none;
    padding: 0;
  }

  .text-container p {
    margin-left: 0px;
  }

  .selection-container {
    display: flex;
    flex-direction: column;
    text-align: left;
  }

  .selection-container li {
    padding: 6px;
  }

  .main-area-container {
    align-items: flex-start;
  }

  .icons {
    display: flex;
    height: 20px;
    justify-content: flex-end;
  }

  .text-container p {
    border-left: none;
    padding-left: 0px;
  }
}
</style>
