<template>
  <div class="col-3">
    <div @click="openQuestion" :class="cssStyle">
      create question view
      <div>{{ question?.content }}</div>
    </div>
  </div>
</template>
<script lang="ts">
import { Question } from "@/interfaces";
import { router } from "@/router";
import { PropType, defineComponent } from "vue";
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

  methods: {
    openQuestion() {
      const setQuestionId = this.setQuestionRouterId;
      const questionId = this.question.id;
      console.log("Da click");
      return router.push({
        name: "list-questions",
        params: { setQuestionId, questionId },
      });
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
