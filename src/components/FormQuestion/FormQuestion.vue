<template>
  <div class="col-3">
    <div :class="handleActive">
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
  computed: {
    handleActive() {
      const { questionId } = router.currentRoute.value.params;
      return questionId == this.question.id ? "bg active" : "bg";
    },
  },
});
</script>
<style scoped>
.bg {
  background: #f5e506;
  white-space: initial;
  height: 200px;
}

.active {
  background-color: rgb(250, 20, 93);
}
</style>
