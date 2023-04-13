import { defineComponent } from "vue";
import { mapActions, mapState, mapWritableState } from "pinia";
import { useQuestionStore, useTimerStore } from "@/store";
import isRoomOwnerMixin from "./isRoomOwnerMixin";
import { UserRank } from "@/interfaces";
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
    },

    nextQuestionMixin() {
      this.resetTimeBar();
      this.startTimeBar();
      this.nextQuestion();
    },

    receiveShowDataMixin(result: Array<UserRank>) {
      this.clearTimeBar();
      this.receiveShowData(result);
    },
  },
  computed: {
    ...mapWritableState(useQuestionStore, [
      "resultData",
      "isCorrect",
      "isAnswered",
    ]),
    ...mapState(useTimerStore, ["timer"]),
  },
});
