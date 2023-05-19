<template>
  <div class="col-3">
    <div class="card-question p-3">
      <div class="d-flex justify-content-end">
        <button
          :onclick="removeQuestionMethod"
          class="btn btn-primary btn-remove"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div
        @click="openQuestion"
        :class="[
          cssStyle,
          'question',
          'd-flex justify-content-between flex-column',
        ]"
      >
        <div class="t-padding text-center">
          <small>{{ question?.content }}</small>
        </div>
        <div class="answers row">
          <div
            class="col-xl-6 col-12-sm"
            v-for="answer in question.answers"
            :key="answer.id"
          >
            <div class="answer">
              <div :class="answer.is_correct ? 'is-correct' : ''"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Question } from "@/interfaces";
import { router } from "@/router";
import { PropType, defineComponent } from "vue";
import { mapActions } from "pinia";
import { useQuestionStore } from "@/store";
export default defineComponent({
  props: {
    question: {
      type: Object as PropType<Question>,
      required: true,
    },
  },
  data() {
    return {
      questionRouterId: router.currentRoute.value.params.questionId ?? "1",
      setQuestionRouterId:
        router.currentRoute.value.params.setQuestionId ?? "1",
      cssStyle:
        this.$route.params.questionId == this.question.id
          ? "bg bg-active"
          : "bg",
    };
  },
  methods: {
    ...mapActions(useQuestionStore, ["removeQuestion"]),
    openQuestion() {
      const setQuestionId = this.setQuestionRouterId;
      const questionId = this.question.id;
      return router.push({
        name: "list-questions",
        params: { setQuestionId, questionId },
      });
    },
    removeQuestionMethod() {
      this.removeQuestion(this.question.id);
    },
  },
  created() {
    this.$watch(
      () => this.$route.params,
      () => {
        if (this.$route.params.questionId == this.question.id) {
          this.cssStyle = "bg bg-active";
        } else {
          this.cssStyle = "bg";
        }
      }
    );
  },
});
</script>
<style scoped>
.bg {
  white-space: initial;
  height: 200px;
  border-radius: 10px;
}
.bg-active {
  background-color: #85eb00;
}
.card-question {
  position: relative;
}
.btn-remove {
  position: absolute;
  top: 17px;
  z-index: 1;
}
.t-padding {
  padding-top: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.question {
  padding: 0px 10px;
}
.answers {
  width: 100%;
  height: 100px;
}
.answer {
  border: 1px solid #000;
  height: 25px;
  border-radius: 5px;
}
.is-correct {
  border-radius: 50%;
  height: 20px;
  width: 20px;
  background-color: #66bf39;
  margin-top: 1px;
  border: 2px solid #fff;
}
/* .question {

  height: 200px;
} */
</style>
