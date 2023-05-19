<template>
  <div class="left">
    <img
      :src="question.image ?? defaultImg"
      class="rounded mx-auto d-block img-thumbnail"
      alt="..."
    />
    <div
      ref="index"
      @keyup.enter="onStop"
      @blur="onInput"
      v-text="question.content"
      :contenteditable="editable.status"
      class="question-text"
    ></div>
  </div>
</template>
<script lang="ts">
import Question from "@/interfaces/Question";
import { PropType, defineComponent } from "vue";
import { EnableEditQuestion } from "@/services";
import { actionEditableHtmlMixin } from "@/mixins";

export default defineComponent({
  props: {
    question: {
      type: Object as PropType<Question>,
      required: true,
    },
  },
  mixins: [actionEditableHtmlMixin],
  emits: ["updateQuestionContent"],
  methods: {
    onInput(e: Event) {
      this.$emit("updateQuestionContent", (e.target as HTMLElement).innerText);
    },
  },
  data() {
    return {
      editable: new EnableEditQuestion(),
      defaultImg:
        "https://1000logos.net/wp-content/uploads/2021/11/Docker-Logo-2013.png",
    };
  },
});
</script>
<style scoped>
.left {
  height: 400px;
  background-color: #f2f2f2;
}
.question-text {
  background-color: rgb(197, 207, 8);
  border: 2px solid red;
  padding: 10px;
  border-radius: 25px;
  margin: 10px;
}
.mx-auto {
  width: 400px;
}
@media screen and (max-width: 600px) {
  .mx-auto {
    width: 200px;
  }
}
</style>
