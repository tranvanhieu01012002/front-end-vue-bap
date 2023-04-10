import { defineStore } from "pinia";
import listAnswers from "./listAnswers";
import AnswerInterface from "@/interfaces/AnswerInterface";

export const useQuestionStore = defineStore("questionStore", {
  state: () => {
    return {
      isAnswered: false,
      answers: listAnswers,
      totalTime: 10, //s
      timeBar: 100, //%
      step: 0.1,
      timeEachStep: 100, //ms
      choseAnswer: -1,
    };
  },
  getters: {},
  actions: {
    updateIsAnswered(): void {
      this.isAnswered = !this.isAnswered;
    },
    updateAnswers(answers: Array<AnswerInterface>): void {
      this.answers = answers;
    },
  },
});
