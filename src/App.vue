<template>
  <nav-link></nav-link>
</template>
<script lang="ts">
import NavLink from "./components/NavLink.vue";
import { defineComponent } from "vue";
export default defineComponent({
  components: {
    NavLink,
  },
});
// https://kahoot.com/home/mobile-app/
</script>
<style>
@import "@/assets/css/variable.css";
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
