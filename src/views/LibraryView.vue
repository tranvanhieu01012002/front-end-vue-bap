<template>
  <LibraryComponent />
  <OpenGame />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import LibraryComponent from "@/components/LibraryComponent.vue";
import OpenGame from "@/components/SelectGame/OpenGame.vue";
export default defineComponent({
  components: {
    LibraryComponent,
    OpenGame,
  },
});
</script>
<style scoped>
.bg {
  height: 94vh;
}
</style>
