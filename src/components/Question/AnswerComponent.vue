<template>
  <div class="answer" :class="answer.bgColor" role="alert">
    <div class="btn btn-success">{{ answer.character }}</div>
    {{ answer.content !== "" ? "this is demo answers" : "" }}
  </div>
</template>
<script lang="ts">
import { PropType, defineComponent } from "vue";
import type AnswerInterface from "@/interfaces/AnswerInterface";
export default defineComponent({
  props: {
    answer: {
      type: Object as PropType<AnswerInterface>,
      required: true,
    },
  },
});
</script>
<style scoped>
.answer:hover {
  background-color: rgb(251, 16, 173);
  cursor: pointer;
}
</style>
