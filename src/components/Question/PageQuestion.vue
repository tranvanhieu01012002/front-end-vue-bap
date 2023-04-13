<template>
  <div>question views</div>
  <div v-show="handleShowQuestion">
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
    <NextQuestionButton @next="showResult">Stop</NextQuestionButton>
  </div>
  <div v-show="isAnswered">
    <CycleLoader />
  </div>
  <div v-show="isResult">
    <RankPage />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { mapState, mapWritableState, mapActions } from "pinia";
import { useQuestionStore } from "@/store/questionStore";
import QuestionLeft from "./QuestionLeft.vue";
import ListAnswers from "./ListAnswers.vue";
import CycleLoader from "../Loader/CycleLoader.vue";
import NextQuestionButton from "../Button/NextQuestionButton.vue";
import { isRoomOwnerMixin, nextQuestionMixin } from "@/mixins";
import RankPage from "../Ranking/RankPage.vue";
export default defineComponent({
  name: "PageQuestion",
  props: {
    questionId: {
      type: String,
      required: true,
    },
  },
  mixins: [nextQuestionMixin, isRoomOwnerMixin],
  components: {
    QuestionLeft,
    ListAnswers,
    CycleLoader,
    NextQuestionButton,
    RankPage,
  },
  watch: {
    // isAnswered(newValue: boolean) {
    //   this.isAnswered = newValue;
    // },
    // isResult() {
    //   clearInterval(this.timer);
    //   return true;
    // },
  },
  computed: {
    ...mapWritableState(useQuestionStore, ["isAnswered", "isResult"]),
    ...mapState(useQuestionStore, [
      "getContentQuestion",
      "getListCurrentAnswers",
    ]),
    handleShowQuestion(): boolean {
      return !this.isAnswered && !this.isResult;
    },
  },
  methods: {
    async showResult(): Promise<void> {
      await this.viewResultStore();
      this.isResult = !this.isResult;
    },
    ...mapActions(useQuestionStore, ["viewResultStore"]),
  },
  data() {
    return {
      timer: 0,
    };
  },
  mounted() {
    this.timer = setInterval(async () => {
      this.startTime -= this.step;
      this.timeBar = (this.startTime * 100) / this.totalTime;
      if (this.startTime <= 0 || this.timeBar <= 1) {
        clearInterval(this.timer);
        if (this.isRoomOwner) {
          await this.showResult();
        } else {
          this.isAnswered = true;
        }
      }
    }, this.timeEachStep);
  },
});
</script>
