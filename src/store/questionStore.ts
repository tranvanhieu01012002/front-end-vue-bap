import { defineStore } from "pinia";
import listAnswers from "./listAnswers";
import Question from "@/interfaces/Question";
import AnswerInterface from "@/interfaces/AnswerInterface";
import { QuestionService } from "@/services";
import { router } from "@/router";
import UserRank from "@/interfaces/UserRank";
import { useTimerStore } from "./timerStore";
import { ParamFunction } from "@/interfaces";
export const useQuestionStore = defineStore("questionStore", {
  state: () => {
    return {
      isAnswered: false,
      isCorrect: false,
      isDoneGame: false,
      answers: listAnswers,
      questions: [] as Question[],
      currentQuestion: {} as Question,
      currentQuestionId: 0,
      questionService: new QuestionService(),
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
    async getQuestion(): Promise<void> {
      this.questions = await this.questionService.getQuestion();
    },

    async nextQuestion(): Promise<void> {
      const { id, questionId } = router.currentRoute.value.params;
      this.questionService.redirectRouteLoading(id, questionId ?? "1");
      const roomId = this.setupBeforeNextQuestion();
      if (this.currentQuestionId - 1 < this.questions.length) {
        await this.questionService.nextQuestion(roomId);
      } else {
        this.handleDoneGame();
      }
    },

    async viewResultStore(): Promise<void> {
      const { id, questionId } = router.currentRoute.value.params;
      this.resultData = await this.questionService.viewResult(id);
      this.questionService.redirectRouteLoading(id, questionId ?? "1");
    },

    answerQuestion(isCorrect: boolean): void {
      const { id, questionId } = router.currentRoute.value.params;
      this.isCorrect = isCorrect;
      this.questionService.redirectRouteLoading(id, questionId ?? "1");
      this.questionService.answerQuestion(id, 30, isCorrect);
    },

    nextQuestionBase(fn: ParamFunction): void {
      this.currentQuestionId++;
      const roomId = this.setupBeforeNextQuestion();
      if (this.currentQuestionId - 1 < this.questions.length) {
        fn(roomId, this.currentQuestionId + " ");
      } else {
        this.handleDoneGame();
      }
    },

    setupBeforeNextQuestion() {
      const { id } = router.currentRoute.value.params;
      return id;
    },

    receiveNextQuestion() {
      this.nextQuestionBase(this.questionService.nextQuestionRedirect);
    },

    receiveShowData(result: Array<UserRank>): void {
      const { id, questionId } = router.currentRoute.value.params;
      console.log("Tracking store", result);
      this.questionService.showResultRedirect(id, questionId);
      this.resultData = result;
    },

    handleDoneGame() {
      const timer = useTimerStore();
      this.isDoneGame = true;
      timer.clearTimeBar();
      this.currentQuestionId = 0;
      this.questions = [];
      this.resultData = [];
      router.push({ path: "/" });
    },
  },
});
