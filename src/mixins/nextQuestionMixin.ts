import { defineComponent } from "vue";
import { mapActions, mapState, mapWritableState } from "pinia";
import { useQuestionStore, useTimerStore } from "@/store";
import isRoomOwnerMixin from "./isRoomOwnerMixin";
import { UserRank } from "@/interfaces";
export default defineComponent({
  mixins: [isRoomOwnerMixin],
  methods: {
    ...mapActions(useQuestionStore, [
      "nextQuestion",
      "viewResultStore",
      "receiveNextQuestion",
      "answerQuestion",
    ]),
    ...mapActions(useTimerStore, [
      "startTimeBar",
      "resetTimeBar",
      "clearTimeBar",
    ]),
    async showResult(): Promise<void> {
      await this.viewResultStore();
      this.clearTimeBar();
    },

    nextQuestionMixinFn() {
      this.resetTimeBar();
      console.log("he");
      // this.startTimeBar();
      this.nextQuestion();
    },

    receiveShowDataMixin(result: Array<UserRank>) {
      this.clearTimeBar();
      this.receiveShowData(result);
    },

    receiveNextQuestionMixin() {
      this.resetTimeBar();
      this.startTimeBar();
      this.receiveNextQuestion();
    },

    answerQuestionMixin(isCorrect: boolean) {
      this.clearTimeBar();
      this.answerQuestion(isCorrect);
    },
  },
  computed: {
    ...mapWritableState(useQuestionStore, ["resultData", "isCorrect"]),
    ...mapState(useTimerStore, ["timer"]),
  },
});
