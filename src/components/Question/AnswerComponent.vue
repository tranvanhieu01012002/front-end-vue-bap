<template>
  <button
    v-on:click="chooseAnswer"
    class="answer"
    :class="answer.bgColor"
    role="alert"
  >
    <div class="btn btn-success">{{ answer.character }}</div>
    <p class="question-text">
      {{ answer.content !== "" ? "this is demo answers" : "" }}
    </p>
  </button>
</template>
<script lang="ts">
import { PropType, defineComponent } from "vue";
import { mapActions } from "pinia";
import { useQuestionStore } from "@/store/questionStore";
import type AnswerInterface from "@/interfaces/AnswerInterface";
export default defineComponent({
  props: {
    answer: {
      type: Object as PropType<AnswerInterface>,
      required: true,
    },
  },
  methods: {
    chooseAnswer: function () {
      this.updateIsAnswered();
    },
    ...mapActions(useQuestionStore, ["updateIsAnswered"]),
  },
});
</script>
<style scoped>
button {
  display: flex;
}
.answer:hover {
  background-color: rgb(251, 16, 173);
  cursor: pointer;
}
.question-text {
  margin: 8px 10px;
}
</style>
