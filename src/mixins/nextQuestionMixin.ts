import { defineComponent } from "vue";
import { QuestionService } from "@/services";
export default defineComponent({
  data: function () {
    return {
      questionService: new QuestionService(),
    };
  },
  methods: {
    nexQuestion() {
      this.questionService.nextQuestion();
    },
  },
});
