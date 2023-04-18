<template>
  <div class="col-6">
    <div class="card m-2 card-height">
      <div class="card-body">
        <h5 class="card-title">Name: {{ setQuestion.name }}</h5>
        <div class="d-flex justify-content-between">
          <a href="#" class="btn btn-primary"
            >Total question: {{ setQuestion.questions_count }}</a
          >
          <a href="#" class="btn btn-success">Update</a>
          <button
            @click="$emit('delete', setQuestion.id)"
            class="btn btn-warning"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { SetQuestion } from "@/interfaces";
import { PropType, defineComponent } from "vue";

export default defineComponent({
  props: {
    setQuestion: {
      type: Object as PropType<SetQuestion>,
      required: true,
    },
  },
  emits: ["delete"],
});
</script>
<style scoped>
.card-height {
  height: 120px;
}
</style>
