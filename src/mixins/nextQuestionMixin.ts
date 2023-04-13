import { defineComponent } from "vue";
import { mapActions, mapWritableState } from "pinia";
import { useQuestionStore } from "@/store";
import isRoomOwnerMixin from "./isRoomOwnerMixin";
export default defineComponent({
  data: function () {
    return {
      totalTime: 10, //s
      startTime: 10,
      step: 0.1,
      timeEachStep: 100,
      timer: 0,
    };
  },
  mixins: [isRoomOwnerMixin],
  methods: {
    ...mapActions(useQuestionStore, ["nextQuestion", "viewResultStore"]),
    async progressBar() {
      this.startTime -= this.step;
      this.timeBar = (this.startTime * 100) / this.totalTime;
      if (this.startTime <= 0 || this.timeBar <= 1) {
        clearInterval(this.timer);
        if (this.isRoomOwner) {
          console.log("bi goi o day");
          await this.showResult();
        } else {
          this.isAnswered = true;
        }
      }
    },
    async showResult(): Promise<void> {
      console.log("Check");
      await this.viewResultStore();
      this.isResult = !this.isResult;
      this.startTime = this.totalTime;
    },
  },
  computed: {
    ...mapWritableState(useQuestionStore, [
      "timeBar",
      "resultData",
      "isCorrect",
      "isAnswered",
      "isResult",
    ]),
  },
});
