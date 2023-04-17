<template>
  <div>List set question</div>
  <div>hihihi</div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { SetQuestion } from "@/interfaces";
export default defineComponent({
  data() {
    return {
      setQuestions: [] as SetQuestion[],
    };
  },
});
</script>
