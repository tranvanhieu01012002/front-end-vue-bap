/* eslint-disable @typescript-eslint/no-explicit-any */
import QuestionRepository from "@/helpers/axios/QuestionRepository";
import { router } from "@/router";
import { useQuestionStore, useUserStore } from "@/store";

export default class QuestionService {
  private question;
  private questionRepository: QuestionRepository;

  constructor() {
    this.question = useQuestionStore();
    this.questionRepository = new QuestionRepository();
  }

  async nextQuestion() {
    const { id } = router.currentRoute.value.params;
    const owner = useUserStore();
    this.question.nextQuestion();
    if (owner.ownerRoom) {
      const { data } = await this.questionRepository.nextQuestion(id);
      console.log(data);
    }
    router.push({
      name: "room-question",
      params: { id, questionId: this.question.currentQuestionId },
    });
  }
}
