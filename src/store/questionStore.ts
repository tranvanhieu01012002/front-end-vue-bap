import { defineStore } from "pinia";
import listAnswers from "./listAnswers";
import QuestionRepository from "@/helpers/axios/QuestionRepository";
import Question from "@/interfaces/Question";
import AnswerInterface from "@/interfaces/AnswerInterface";

export const useQuestionStore = defineStore("questionStore", {
  state: () => {
    return {
      totalTime: 60, //s
      timeBar: 100, //%
      step: 0.1,
      timeEachStep: 100, //ms
      choseAnswer: -1,
      isAnswered: false,
      answers: listAnswers,
      questions: [] as Question[],
      currentQuestion: {} as Question,
      currentQuestionId: 0,
    };
  },
  getters: {
    getContentQuestion(): Question {
      return this.questions[this.currentQuestionId - 1];
    },
    getListCurrentAnswers(): Array<AnswerInterface> {
      return this.questions[this.currentQuestionId - 1].answers.map(
        (answerItem, index) => ({ ...answerItem, ...this.answers[index] })
      );
    },
  },
  actions: {
    updateIsAnswered(): void {
      this.isAnswered = !this.isAnswered;
    },
    async getQuestion(): Promise<void> {
      const questionRepo = new QuestionRepository();
      const { data } = await questionRepo.getQuestion(1);
      this.questions = data.data;
    },
    nextQuestion(): void {
      console.log("next dc as");
      this.currentQuestionId++;
    },
  },
});
