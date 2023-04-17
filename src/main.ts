import { createApp } from "vue";
import { BootstrapVue3 } from "bootstrap-vue-3";
import App from "./App.vue";
import { router } from "./router";
import { createPinia } from "pinia";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";
import "nprogress/nprogress.css";
import vue3GoogleLogin from "vue3-google-login";
import { createApolloProvider } from "@vue/apollo-option";
import { ApolloClient, InMemoryCache } from "@apollo/client/core";

// import Echo from "laravel-echo";
const pinia = createPinia();
const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  cache,
  uri: process.env.VUE_APP_GRAPHQL,
});
const apolloProvider = createApolloProvider({
  defaultClient: apolloClient,
});

createApp(App)
  .use(BootstrapVue3)
  .use(vue3GoogleLogin, {
    clientId: process.env.VUE_APP_GOOGLE_CLIENT || "ahihi do ngok",
  })
  .use(pinia)
  .use(router)
  .use(apolloProvider)
  .mount("#app");
