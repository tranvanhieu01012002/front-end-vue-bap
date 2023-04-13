<template>
  <div class="container">
    <h1>Not found</h1>
    <RankPage />
    <QuestionResultVue :correct="true" />
    <QuestionResultVue :correct="false" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import RankPage from "@/components/Ranking/RankPage.vue";
import QuestionResultVue from "@/components/Question/QuestionResult.vue";
export default defineComponent({
  name: "UserView",
  components: {
    RankPage,
    QuestionResultVue,
  },
});
</script>
