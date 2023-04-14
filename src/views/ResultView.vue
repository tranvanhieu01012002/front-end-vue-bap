<template>
  <h2>Result page</h2>
  <RankPage />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import RankPage from "@/components/Ranking/RankPage.vue";
export default defineComponent({
  components: {
    RankPage,
  },
});
</script>
