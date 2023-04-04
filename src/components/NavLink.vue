<template>
  <nav>
    <template v-for="(link, index) in links" :key="index">
      <template v-if="index < links.length - 1">
        <router-link :to="link.path">{{ link.name }}</router-link
        >|
      </template>
      <template v-else>
        <router-link :to="link.path">{{ link.name }}</router-link>
      </template>
    </template>
  </nav>
  <router-view />
</template>
<script lang="ts">
import { routes } from "../router";
export default {
  data() {
    return {
      links: routes,
    };
  },
};
</script>
