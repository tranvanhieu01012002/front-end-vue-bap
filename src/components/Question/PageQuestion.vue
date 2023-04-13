<template>
  <div>question views</div>
  <div v-show="handleShowQuestion">
    <div class="m-2">
      <ProgressBar />
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
import { mapState, mapWritableState } from "pinia";
import { useQuestionStore } from "@/store/questionStore";
import QuestionLeft from "./QuestionLeft.vue";
import ListAnswers from "./ListAnswers.vue";
import CycleLoader from "../Loader/CycleLoader.vue";
import NextQuestionButton from "../Button/NextQuestionButton.vue";
import { isRoomOwnerMixin, nextQuestionMixin } from "@/mixins";
import RankPage from "../Ranking/RankPage.vue";
import ProgressBar from "./ProgressBar.vue";
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
    ProgressBar,
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
});
</script>
