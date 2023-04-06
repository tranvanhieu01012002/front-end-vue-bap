import { createApp } from "vue";
import { BootstrapVue3 } from "bootstrap-vue-3";
import App from "./App.vue";
import { router } from "./router";
import store from "./store";
import { createPinia } from "pinia";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";
import "nprogress/nprogress.css";
import vue3GoogleLogin from "vue3-google-login";

const pinia = createPinia();

createApp(App)
  .use(BootstrapVue3)
  .use(vue3GoogleLogin, {
    clientId: process.env.VUE_APP_GOOGLE_CLIENT || "ahihi do ngok",
  })
  .use(store)
  .use(pinia)
  .use(router)
  .mount("#app");
