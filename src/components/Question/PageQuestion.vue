<template>
  <div>question views</div>
  <div class="row d-flex justify-content-between">
    <QuestionLeft />
    <ListAnswers />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import QuestionLeft from "./QuestionLeft.vue";
import ListAnswers from "./ListAnswers.vue";
export default defineComponent({
  name: "PageQuestion",
  components: {
    QuestionLeft,
    ListAnswers,
  },
});
</script>
