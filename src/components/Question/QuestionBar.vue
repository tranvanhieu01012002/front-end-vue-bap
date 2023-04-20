<template>
  <h2>
    Total questions:
    {{ showCurrentQuestion() }}
    /
    {{ questions.length }}
  </h2>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { mapState } from "pinia";
import { useQuestionStore } from "@/store";
import { findIndexFromId } from "@/helpers";
export default defineComponent({
  computed: {
    ...mapState(useQuestionStore, ["questions", "currentQuestionIndex"]),
  },
  methods: {
    showCurrentQuestion(): number {
      const { questionId } = this.$router.currentRoute.value.params;
      return findIndexFromId(questionId, this.questions) + 1;
    },
  },
});
</script>
