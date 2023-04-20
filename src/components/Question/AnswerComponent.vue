<template>
  <button
    v-on:click="chooseAnswer"
    class="answer"
    :class="answer.bgColor"
    role="alert"
  >
    <div class="character">{{ answer.character }}</div>
    <p :contenteditable="editable.status" :class="handleShowAnswer">
      {{ answer.content }}
    </p>
  </button>
</template>
<script lang="ts">
import { PropType, defineComponent } from "vue";
import type AnswerInterface from "@/interfaces/AnswerInterface";
import { isRoomOwnerMixin, nextQuestionMixin } from "@/mixins";
import { EnableEditQuestion } from "@/services";

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
    handleIsCorrect(): string {
      return this.answer.is_correct ? "btn btn-success" : " btn btn-warning ";
    },
  },
  computed: {
    handleShowAnswer(): string {
      if (this.editable.status) {
        return this.handleIsCorrect();
      } else {
        return "question-text";
      }
    },
  },
  data() {
    return {
      editable: new EnableEditQuestion(),
    };
  },
});
</script>
<style scoped>
button {
  display: flex;
  border-top-right-radius: 25px;
  border-bottom-left-radius: 25px;
  border: 10px solid #f93466;
  background: rgb(230, 193, 173);
  position: relative;
  background-clip: padding-box;
  border: 10px solid transparent;
  background-color: #fcf9fe;
  border: 10px solid #87838e;
}
.character {
  border-bottom-left-radius: 25px;
  background-color: #f93466;
  width: 30px;
  height: 70px;
  padding: 10px 20px;
}
.answer:before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  margin: -10px;
  background-image: linear-gradient(to right top, #87838e, #5b5a5a);
  border-radius: inherit;
}
.answer:hover {
  background-color: rgb(251, 16, 173);
  cursor: pointer;
}
.question-text {
  margin: 8px 10px;
}
.btn {
  height: 70px;
}
</style>
