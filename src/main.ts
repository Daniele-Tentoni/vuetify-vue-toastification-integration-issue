/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from "./App.vue";

// Composables
import { createApp } from "vue";

// Plugins
import { registerPlugins } from "@/plugins";

// Toastification
import Toast, { POSITION } from "vue-toastification";
import "vue-toastification/dist/index.css";

const app = createApp(App);

const options = {
  shareAppContext: true,
  position: POSITION.BOTTOM_CENTER,
};

registerPlugins(app);

app.use(Toast, options);

app.mount("#app");
