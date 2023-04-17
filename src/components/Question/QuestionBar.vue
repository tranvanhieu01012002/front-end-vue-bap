<template>
  <h2>Total questions: {{ currentQuestionId }}/ {{ questions.length }}</h2>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { mapState } from "pinia";
import { useQuestionStore } from "@/store";
export default defineComponent({
  computed: {
    ...mapState(useQuestionStore, ["currentQuestionId", "questions"]),
  },
});
</script>
