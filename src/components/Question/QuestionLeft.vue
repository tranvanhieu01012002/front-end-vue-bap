<template>
  <div class="col-5 left">
    <!-- <div>Question view</div> -->
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
      :contenteditable="true"
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
.col-5 {
  background-color: aqua;
  padding: 0px;
}
.question-text {
  background-color: rgb(197, 207, 8);
  border: 2px solid red;
  padding: 10px;
  border-radius: 25px;
  margin: 10px;
}
.question-text:before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  margin: -10px;
  background-image: linear-gradient(to right top, #87838e, #5b5a5a);
  border-radius: inherit;
}
.mx-auto {
  width: 400px;
}
.left {
  border: 10px solid #f93466;
  background: rgb(230, 193, 173);
  position: relative;
  background-clip: padding-box;
  border: 10px solid transparent;
  background-color: #919191;
  /* border-radius: 20px; */
  border-top-left-radius: 60px;
  border-bottom-right-radius: 60px;
}
.left:before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  margin: -10px;
  background-image: linear-gradient(to right top, #fff151, #f55656);
  border-radius: inherit;
}
</style>
