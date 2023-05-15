<template>
  <LibraryComponent />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import LibraryComponent from "@/components/LibraryComponent.vue";
export default defineComponent({
  components: {
    LibraryComponent,
  },
});
</script>
<style scoped>
.bg {
  height: 94vh;
}
</style>
