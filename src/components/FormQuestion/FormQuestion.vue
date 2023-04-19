<template>
  <div class="col-3">
    <div @click="openQuestion" :class="cssStyle">
      <div class="d-flex justify-content-end">
        <button :onclick="removeQuestionMethod" class="btn btn-primary">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      create question view
      <div>{{ question?.content }}</div>
    </div>
  </div>
</template>
<script lang="ts">
import { Question } from "@/interfaces";
import { router } from "@/router";
import { PropType, defineComponent } from "vue";
import { mapActions, mapWritableState } from "pinia";
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
          ? "bg btn btn-success"
          : "bg btn btn-warning",
    };
  },
  computed: {
    ...mapWritableState(useQuestionStore, ["currentQuestionId"]),
  },
  methods: {
    ...mapActions(useQuestionStore, ["removeQuestion"]),
    openQuestion() {
      const setQuestionId = this.setQuestionRouterId;
      const questionId = this.question.id;
      this.currentQuestionId = parseInt(questionId);
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
          this.cssStyle = "bg btn btn-success";
        } else {
          this.cssStyle = "bg btn btn-warning";
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
}
</style>
