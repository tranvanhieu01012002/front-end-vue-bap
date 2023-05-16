<template>
  <div class="row padding-top-main d-flex justify-content-center">
    <AlertTopMainVue />
    <AlertTopMainVue />
    <AlertTopMainVue />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import AlertTopMainVue from "./AlertTopMain.vue";
export default defineComponent({
  components: {
    AlertTopMainVue,
  },
});
</script>
<style scoped>
.padding-top-main {
  padding: var(--padding-top-main) 0vw;
}
</style>
