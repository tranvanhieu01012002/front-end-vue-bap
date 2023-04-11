<template>
  <div class="col-5">
    <div>Question view</div>
    <img :src="question.image" class="rounded mx-auto d-block" alt="..." />
    <div class="question-text">
      {{ question.content }}
    </div>
  </div>
</template>
<script lang="ts">
import Question from "@/interfaces/Question";
import { PropType, defineComponent } from "vue";
export default defineComponent({
  props: {
    question: {
      type: Object as PropType<Question>,
      required: true,
    },
  },
});
</script>
<style scoped>
.col-5 {
  background-color: aqua;
  padding: 0px;
}
.question-text {
  background-color: rgb(220, 231, 19);
  padding: 10px 10px;
}
.mx-auto {
  width: 400px;
}
</style>
