<template>
  <component :is="layout">
    <router-view />
  </component>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
const defaultLayout = "default";
const route = useRoute();
const layout = computed((): string => {
  return (route.meta.layout ?? defaultLayout) + "-layout";
});
</script>
<style>
@import "@/assets/css/index.css";
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
