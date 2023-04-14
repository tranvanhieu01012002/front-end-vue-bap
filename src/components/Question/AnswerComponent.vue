<template>
  <button
    v-on:click="chooseAnswer"
    class="answer"
    :class="answer.bgColor"
    role="alert"
  >
    <div class="btn btn-success">{{ answer.character }}</div>
    <p class="question-text">
      {{ answer.content }}
    </p>
  </button>
</template>
<script lang="ts">
import { PropType, defineComponent } from "vue";
import type AnswerInterface from "@/interfaces/AnswerInterface";
import { isRoomOwnerMixin, nextQuestionMixin } from "@/mixins";
export default defineComponent({
  props: {
    answer: {
      type: Object as PropType<AnswerInterface>,
      required: true,
    },
  },
  mixins: [isRoomOwnerMixin, nextQuestionMixin],
  methods: {
    chooseAnswer: function () {
      if (!this.isRoomOwner) {
        this.answerQuestionMixin(this.answer.isCorrect ?? false);
      }
    },
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
