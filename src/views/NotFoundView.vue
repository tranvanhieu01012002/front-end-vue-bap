<template>
  <div class="container">
    <h1>Not found</h1>
    <RankPage />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import RankPage from "@/components/Ranking/RankPage.vue";
export default defineComponent({
  name: "UserView",
  components: {
    RankPage,
  },
});
</script>
