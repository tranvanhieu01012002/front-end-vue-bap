import { RoomOwnerService } from "@/services";
import { defineStore } from "pinia";
import { useQuestionStore } from "./questionStore";
export const useTimerStore = defineStore("timerStore", {
  state: () => {
    return {
      timer: 0,
      timeBar: 100,
      totalTime: 60,
      startTime: 60,
      step: 0.1,
      timeEachStep: 100,
      isRoomOwner: new RoomOwnerService().checkRoomOwner(),
    };
  },
  actions: {
    async progressBar() {
      this.startTime--;
      console.log(this.startTime);
      this.timeBar = (this.startTime * 100) / this.totalTime;
      if (this.startTime <= 0 || this.timeBar <= 1) {
        this.clearTimeBar();
        const question = useQuestionStore();
        if (this.isRoomOwner) {
          console.log("bi goi o day");
          question.viewResultStore();
        } else {
          question.answerQuestion(false);
        }
      }
    },
    startTimeBar() {
      this.timer = window.setInterval(this.progressBar, 1000);
    },
    clearTimeBar() {
      clearInterval(this.timer);
    },
    resetTimeBar() {
      this.timeBar = 100;
      this.startTime = 60;
    },
  },
});
