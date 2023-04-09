import { createApp } from "vue";
import { BootstrapVue3 } from "bootstrap-vue-3";
import App from "./App.vue";
import { router } from "./router";
import { createPinia } from "pinia";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";
import "nprogress/nprogress.css";
import vue3GoogleLogin from "vue3-google-login";

// import Echo from "laravel-echo";
const pinia = createPinia();

// window.Pusher = require("pusher-js");

// window.Echo = new Echo({
//   broadcaster: "pusher",
//   key: process.env.VUE_APP_WEBSOCKET_KEY,
//   wsHost: process.env.VUE_APP_WEBSOCKET_SERVER,
//   wsPort: 6001,
//   forceTLS: false,
//   disableStats: true,
//   cluster: "eu",
// });
// import Echo from "laravel-echo";

// const token = localStorage.getItem("token");
// window.Echo = new Echo({
//   auth: {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   },
//   broadcaster: "socket.io",
//   host: window.location.hostname + ":6001",
//   forceTLS: false,
//   disableStats: true,
//   cluster: "eu",
// });

createApp(App)
  .use(BootstrapVue3)
  .use(vue3GoogleLogin, {
    clientId: process.env.VUE_APP_GOOGLE_CLIENT || "ahihi do ngok",
  })
  .use(pinia)
  .use(router)
  .mount("#app");
