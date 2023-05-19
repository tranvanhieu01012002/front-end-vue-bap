<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="warning">
      <b-navbar-brand href="#">G-learning</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item
            v-for="(link, index) in links"
            :key="index"
            :to="link.path"
            >{{ link.meta?.label }}</b-nav-item
          >
        </b-navbar-nav>
        <right-bar />
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script lang="ts">
import { routes } from "../router";
import { defineComponent } from "vue";
import RightBar from "./NavBar/RightBar.vue";

export default defineComponent({
  data() {
    return {
      links: routes.slice(0, 5),
    };
  },
  components: {
    RightBar,
  },
});
</script>
<style scoped>
.container {
  margin-top: 2%;
}
</style>
