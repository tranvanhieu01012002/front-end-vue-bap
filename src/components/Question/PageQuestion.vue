<template>
  <div>question views</div>
  <div v-show="!isAnswered">
    <div class="m-2">
      <BProgress
        show-progress
        height="2rem"
        :value="timeBar"
        animated
      ></BProgress>
    </div>
    <div class="row d-flex justify-content-between">
      <QuestionLeft :question="getContentQuestion" />
      <ListAnswers :answers="getListCurrentAnswers" />
    </div>
  </div>
  <div v-show="isAnswered">
    <CycleLoader />
  </div>
  <NextQuestionButton>Next Question</NextQuestionButton>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { mapState, mapWritableState } from "pinia";
import { useQuestionStore } from "@/store/questionStore";
import QuestionLeft from "./QuestionLeft.vue";
import ListAnswers from "./ListAnswers.vue";
import CycleLoader from "../Loader/CycleLoader.vue";
import NextQuestionButton from "../Button/NextQuestionButton.vue";
import { nextQuestionMixin } from "@/mixins";
export default defineComponent({
  name: "PageQuestion",
  props: {
    questionId: {
      type: String,
      required: true,
    },
  },
  mixins: [nextQuestionMixin],
  components: {
    QuestionLeft,
    ListAnswers,
    CycleLoader,
    NextQuestionButton,
  },
  watch: {
    isAnswered(newValue: boolean) {
      this.isAnswered = newValue;
    },
  },
  computed: {
    ...mapWritableState(useQuestionStore, ["isAnswered"]),
    ...mapState(useQuestionStore, [
      "getContentQuestion",
      "getListCurrentAnswers",
    ]),
  },
  data() {
    return {
      timer: 0,
    };
  },
  mounted() {
    this.timer = setInterval(() => {
      this.startTime -= this.step;
      this.timeBar = (this.startTime * 100) / this.totalTime;
      if (this.startTime <= 0 || this.timeBar <= 1) {
        clearInterval(this.timer);
        this.nextQuestion();
        console.log("oh, het time r cu");
        this.isAnswered = true;
      }
    }, this.timeEachStep);
  },
});
</script>
