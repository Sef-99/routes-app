import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes/router";

createApp(App).use(router).mount("#app");
