import { defineStore } from "pinia";
import listAnswers from "./listAnswers";
import Question from "@/interfaces/Question";
import AnswerInterface from "@/interfaces/AnswerInterface";
import { QuestionService } from "@/services";
import { router } from "@/router";

export const useQuestionStore = defineStore("questionStore", {
  state: () => {
    return {
      choseAnswer: -1,
      isAnswered: false,
      answers: listAnswers,
      questions: [] as Question[],
      currentQuestion: {} as Question,
      currentQuestionId: 0,
      isCorrect: false,
      timeBar: 100,
      questionService: new QuestionService(),
    };
  },
  getters: {
    getContentQuestion(): Question {
      return this.questions[this.currentQuestionId - 1];
    },
    getListCurrentAnswers(): Array<AnswerInterface> {
      return this.questions[this.currentQuestionId - 1].answers.map(
        (answerItem, index) => ({
          ...answerItem,
          ...this.answers[index],
          isCorrect: answerItem.is_correct,
        })
      );
    },
  },
  actions: {
    updateIsAnswered(): void {
      this.isAnswered = !this.isAnswered;
    },

    answerQuestion(isCorrect: boolean): void {
      const { id } = router.currentRoute.value.params;
      this.isCorrect = isCorrect;
      this.questionService.answerQuestion(id, this.timeBar, isCorrect);
    },

    async getQuestion(): Promise<void> {
      this.questions = await this.questionService.getQuestion();
    },

    nextQuestion(): void {
      this.currentQuestionId++;
      this.questionService.nextQuestion(this.currentQuestionId);
    },
  },
});
