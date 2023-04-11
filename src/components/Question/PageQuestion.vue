<template>
  <div>question views</div>
  <div v-show="!isAnswered">
    <div class="m-2">
      <b-progress
        show-progress
        height="2rem"
        :value="timeBar"
        animated
      ></b-progress>
    </div>
    <div class="row d-flex justify-content-between">
      <QuestionLeft />
      <ListAnswers />
    </div>
  </div>
  <div v-show="isAnswered">
    <CycleLoader />
  </div>
  <NextQuestionButton>Next Question</NextQuestionButton>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { mapWritableState } from "pinia";
import { useQuestionStore } from "@/store/questionStore";
import QuestionLeft from "./QuestionLeft.vue";
import ListAnswers from "./ListAnswers.vue";
import CycleLoader from "../Loader/CycleLoader.vue";
import NextQuestionButton from "../Button/NextQuestionButton.vue";
export default defineComponent({
  name: "PageQuestion",
  data() {
    return {
      start: 10,
      timer: 0,
    };
  },
  components: {
    QuestionLeft,
    ListAnswers,
    CycleLoader,
    NextQuestionButton,
  },
  mounted() {
    this.timer = setInterval(() => {
      this.start -= this.step;
      this.timeBar = (this.start * 100) / this.totalTime;
      if (this.start <= 0 || this.timeBar <= 1) {
        clearInterval(this.timer);
        console.log("oh, het time r cu");
        this.isAnswered = true;
      }
    }, this.timeEachStep);
  },
  watch: {
    isAnswered(newValue: boolean) {
      this.isAnswered = newValue;
    },
  },
  computed: {
    ...mapWritableState(useQuestionStore, [
      "isAnswered",
      "step",
      "timeBar",
      "timeEachStep",
      "totalTime",
    ]),
  },
});
</script>
