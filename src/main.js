import { createApp } from "vue";
import App from "./App.vue";
import state from "./store/state";

createApp(App).provide("state", state).mount("#app");
