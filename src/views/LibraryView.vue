<template>
  <div class="bg padding-t">
    <div class="container">
      <div><FilterBar /></div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import FilterBar from "@/components/FilterBar/FilterBar.vue";
export default defineComponent({
  components: {
    FilterBar,
  },
});
</script>
<style scoped>
.bg {
  height: 94vh;
}
</style>
