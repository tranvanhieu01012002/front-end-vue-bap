import { defineComponent } from "vue";
import { QuestionService } from "@/services";
export default defineComponent({
  data: function () {
    return {
      questionService: new QuestionService(),
      totalTime: 60, //s
      startTime: 60,
      timeBar: 100, //%
      step: 0.1,
      timeEachStep: 100,
    };
  },
  methods: {
    nexQuestion() {
      this.questionService.nextQuestion();
      this.resetTime();
    },
    resetTime() {
      (this.timeBar = 100), (this.startTime = 60);
    },
  },
});
