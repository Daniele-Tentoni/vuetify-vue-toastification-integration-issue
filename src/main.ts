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
import type { PluginOptions } from "vue-toastification";

const app = createApp(App);

const options: PluginOptions = {
  container: () => document.getElementById("app")!, // "vuetify-app" or "vuetify-main"
  shareAppContext: true,
  position: POSITION.BOTTOM_CENTER,
};

registerPlugins(app);

app.use(Toast, options);

app.mount("#app");
