/* eslint-disable @typescript-eslint/no-explicit-any */
import { router } from "@/router";
import { useQuestionStore } from "@/store";
// import router from "@/router";
export default class QuestionService {
  private question: any;
  constructor() {
    this.question = useQuestionStore();
  }
  nextQuestion() {
    this.question.nextQuestion();
    const { id } = router.currentRoute.value.params;
    router.push({
      name: "room-question",
      params: { id, questionId: this.question.currentQuestionId },
    });
  }
}
