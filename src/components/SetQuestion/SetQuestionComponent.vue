<template>
  <div class="col-6">
    <div class="card m-2 card-height">
      <div class="card-body">
        Name:
        <h5
          contenteditable="true"
          @keyup.enter="onStop"
          @blur="onInput"
          ref="index"
          class="card-title"
        >
          {{ setQuestion.name }}
        </h5>
        <div class="d-flex justify-content-between">
          <a href="#" class="btn btn-primary"
            >Total question: {{ setQuestion.questions_count }}</a
          >
          <button
            @click="$emit('listQuestions', setQuestion.id)"
            class="btn btn-success"
          >
            Show question
          </button>
          <button
            v-if="!isChooseRoom"
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
import { actionEditableHtmlMixin } from "@/mixins";

export default defineComponent({
  props: {
    setQuestion: {
      type: Object as PropType<SetQuestion>,
      required: true,
    },
    isChooseRoom: {
      type: Boolean,
      required: true,
    },
  },
  mixins: [actionEditableHtmlMixin],
  emits: ["delete", "listQuestions", "updateName"],
  methods: {
    onInput(e: Event) {
      const content = (e.target as HTMLElement).innerText;
      this.$emit("updateName", this.setQuestion.id, content);
    },
  },
});
</script>
<style scoped>
.card-height {
  height: 120px;
}
</style>
