<template>
  <nav>
    <b-nav tabs>
      <b-nav-item v-for="(link, index) in links" :key="index" :to="link.path">{{
        link.name
      }}</b-nav-item>
    </b-nav>
  </nav>
  <router-view />
</template>
<script lang="ts">
import { routes } from "../router";
export default {
  data() {
    routes.splice(-3, 3);
    return {
      links: routes,
    };
  },
};
</script>
