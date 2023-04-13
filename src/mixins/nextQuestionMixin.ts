import { defineComponent } from "vue";
import { mapActions, mapState, mapWritableState } from "pinia";
import { useQuestionStore, useTimerStore } from "@/store";
import isRoomOwnerMixin from "./isRoomOwnerMixin";
export default defineComponent({
  mixins: [isRoomOwnerMixin],
  methods: {
    ...mapActions(useQuestionStore, ["nextQuestion", "viewResultStore"]),
    ...mapActions(useTimerStore, [
      "startTimeBar",
      "resetTimeBar",
      "clearTimeBar",
    ]),
    async showResult(): Promise<void> {
      await this.viewResultStore();
      this.clearTimeBar();
      this.isResult = !this.isResult;
    },

    nextQuestionMixin() {
      this.resetTimeBar();
      this.startTimeBar();
      this.nextQuestion();
    },
  },
  computed: {
    ...mapWritableState(useQuestionStore, [
      "resultData",
      "isCorrect",
      "isAnswered",
      "isResult",
    ]),
    ...mapState(useTimerStore, ["timer"]),
  },
});
