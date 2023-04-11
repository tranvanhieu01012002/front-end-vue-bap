<template>
  <div>
    <PageQuestion />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import PageQuestion from "@/components/Question/PageQuestion.vue";
export default defineComponent({
  components: {
    PageQuestion,
  },
});
</script>
