import { defineStore } from "pinia";
import listAnswers from "./listAnswers";
import Question from "@/interfaces/Question";
import AnswerInterface from "@/interfaces/AnswerInterface";
import { QuestionService } from "@/services";
import { router } from "@/router";
import UserRank from "@/interfaces/UserRank";

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
      isResult: false,
      resultData: [] as UserRank[],
    };
  },
  getters: {
    getContentQuestion(): Question {
      return this.questions[this.currentQuestionId - 1];
    },
    getListCurrentAnswers(): Array<AnswerInterface> {
      if (this.currentQuestionId - 1 < this.questions.length) {
        return this.questions[this.currentQuestionId - 1].answers.map(
          (answerItem, index) => ({
            ...answerItem,
            ...this.answers[index],
            isCorrect: answerItem.is_correct,
          })
        );
      }
      return [];
    },
  },
  actions: {
    updateIsAnswered(): void {
      this.isAnswered = !this.isAnswered;
    },

    answerQuestion(isCorrect: boolean): void {
      const { id } = router.currentRoute.value.params;
      this.isCorrect = isCorrect;
      this.isAnswered = true;
      this.questionService.answerQuestion(id, this.timeBar, isCorrect);
    },

    async getQuestion(): Promise<void> {
      this.questions = await this.questionService.getQuestion();
    },

    async nextQuestion(): Promise<void> {
      this.isAnswered = false;
      this.currentQuestionId++;
      this.isResult = false;
      if (this.currentQuestionId - 1 < this.questions.length) {
        await this.questionService.nextQuestion(this.currentQuestionId);
      } else {
        console.log(2);
        router.push({ path: "/" });
      }
      this.isAnswered = false;
    },

    async viewResultStore(): Promise<void> {
      const { id } = router.currentRoute.value.params;
      this.resultData = await this.questionService.viewResult(id);
    },

    receiveShowData(result: Array<UserRank>): void {
      console.log("Tracking store", result);
      this.isResult = true;
      this.resultData = result;
    },
  },
});
