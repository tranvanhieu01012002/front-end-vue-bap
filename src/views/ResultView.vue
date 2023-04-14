<template>
  <div class="d-flex justify-content-between">
    <h2>Result page</h2>
    <QuestionBar />
  </div>
  <RankPage />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import RankPage from "@/components/Ranking/RankPage.vue";
import QuestionBar from "@/components/Question/QuestionBar.vue";
export default defineComponent({
  components: {
    RankPage,
    QuestionBar,
  },
});
</script>
