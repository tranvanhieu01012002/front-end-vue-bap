<template>
  <div>
    <PageQuestion :question-id="questionId" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import PageQuestion from "@/components/Question/PageQuestion.vue";
export default defineComponent({
  props: {
    id: {
      type: String,
      required: true,
    },
    questionId: {
      type: String,
      required: true,
    },
  },
  components: {
    PageQuestion,
  },
});
</script>
