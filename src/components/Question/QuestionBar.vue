<template>
  <h2>Total questions: {{ 4 }}/ {{ questions.length }}</h2>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { mapState } from "pinia";
import { useQuestionStore } from "@/store";
export default defineComponent({
  computed: {
    ...mapState(useQuestionStore, ["questions"]),
  },
});
</script>
