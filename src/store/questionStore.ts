import { defineStore } from "pinia";
import listAnswers from "./listAnswers";
import QuestionRepository from "@/helpers/axios/QuestionRepository";
import Question from "@/interfaces/Question";

export const useQuestionStore = defineStore("questionStore", {
  state: () => {
    return {
      totalTime: 10, //s
      timeBar: 100, //%
      step: 0.1,
      timeEachStep: 100, //ms
      choseAnswer: -1,
      isAnswered: false,
      answers: listAnswers,
      questions: [] as Question[],
    };
  },
  getters: {},
  actions: {
    updateIsAnswered(): void {
      this.isAnswered = !this.isAnswered;
    },
    async getQuestion(): Promise<void> {
      const questionRepo = new QuestionRepository();
      const { data } = await questionRepo.getQuestion(1);
      console.log(data);
      this.questions = data.data;
    },
  },
});
