<template>
  <h2>Total questions: {{ currentQuestionIndex }}/ {{ questions.length }}</h2>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { mapState } from "pinia";
import { useQuestionStore } from "@/store";
export default defineComponent({
  computed: {
    ...mapState(useQuestionStore, ["currentQuestionIndex", "questions"]),
  },
});
</script>
