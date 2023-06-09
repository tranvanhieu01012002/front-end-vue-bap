import { defineStore } from "pinia";
import { listAnswers } from "./";
import { QuestionService } from "@/services";
import { router } from "@/router";
import { useTimerStore } from "./timerStore";
import {
  ParamFunction,
  UserRank,
  AnswerInterface,
  Question,
} from "@/interfaces";
import { useModalStore } from "./modalStore";
import { printListNumber } from "@/helpers";

export const useQuestionStore = defineStore("questionStore", {
  state: () => {
    return {
      isCorrect: false,
      answers: listAnswers,
      questions: [] as Question[],
      questionService: new QuestionService(),
      resultData: [] as UserRank[],
      currentQuestionIndex: -1,
    };
  },
  getters: {
    getContentQuestion(): Question {
      const { questionId } = router.currentRoute.value.params;
      const question = this.questions.filter(
        (question) => question.id == (questionId ?? "1")
      );
      return question[0];
    },

    getListCurrentAnswers(): Array<AnswerInterface> {
      const contentQuestion = this.getContentQuestion;
      if (contentQuestion) {
        return this.getContentQuestion.answers.map((answerItem, index) => ({
          ...answerItem,
          ...this.answers[index],
          isCorrect: answerItem.is_correct,
        }));
      } else {
        return [];
      }
    },
  },
  actions: {
    updateQuestions(questions: Array<Question>) {
      this.questions = questions;
    },

    async getQuestion(setQuestionId: number): Promise<void> {
      const dataResponse: Array<Question> =
        await this.questionService.getQuestion(setQuestionId);
      if (dataResponse.length === 0) {
        this.questions = [];
        this.addNewQuestion();
      } else {
        this.questions = dataResponse;
        this.currentQuestionIndex = -1;
      }
    },

    async nextQuestion(): Promise<void> {
      const { id, questionId } = router.currentRoute.value.params;
      this.questionService.redirectRouteLoading(id, questionId ?? "1");
      await this.questionService.nextQuestion(id);
    },

    async viewResultStore(): Promise<void> {
      const { id } = router.currentRoute.value.params;
      this.resultData = await this.questionService.viewResult(id);
    },

    answerQuestion(isCorrect: boolean): void {
      const { id, questionId } = router.currentRoute.value.params;
      this.isCorrect = isCorrect;
      this.questionService.redirectRouteLoading(id, questionId);
      const timer = useTimerStore();
      this.questionService.answerQuestion(id, timer.timeBar, isCorrect);
    },

    nextQuestionBase(fn: ParamFunction): void {
      const { id } = router.currentRoute.value.params;
      this.currentQuestionIndex++;
      // if more length will be undefine
      const question = this.questions[this.currentQuestionIndex];
      if (question) {
        console.log(this.currentQuestionIndex, "view question");
        fn(id, question.id);
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
      timer.clearTimeBar();
      this.questions = [];
      this.resultData = [];
      router.push({ path: "/" });
    },

    addNewQuestion() {
      const questionId = Date.now();
      this.questions.push({
        id: `${questionId}`,
        answers: this.createListAnswerId(listAnswers, questionId),
      });
    },

    removeQuestion(id: string) {
      this.questions = this.questions.filter((question) => question.id !== id);
      const { setQuestionId, questionId } = router.currentRoute.value.params;
      let toQuestionId;
      if (id == questionId) {
        toQuestionId = this.questions[0].id;
      } else {
        toQuestionId = questionId;
      }
      router.push({
        name: "list-questions",
        params: { setQuestionId, questionId: toQuestionId },
      });
    },

    updateAnswer(answer: AnswerInterface) {
      this.questions = this.questions.map((item) =>
        item.id == answer.questionId?.toString()
          ? {
              ...item,
              answers: item.answers.map((answerInArray) =>
                answerInArray.id == answer.id
                  ? answer
                  : {
                      ...answerInArray,
                      is_correct: answer.is_correct
                        ? false
                        : answerInArray.is_correct,
                      isCorrect: answer.is_correct
                        ? false
                        : answerInArray.is_correct,
                    }
              ),
            }
          : item
      );
    },

    createListAnswerId(answers: Array<AnswerInterface>, question_id: number) {
      return answers.map((answer, index) => ({
        ...answer,
        id: Date.now() + index,
        question_id,
        is_correct: false,
      }));
    },

    async saveQuestion(setQuestionId: string | string[]) {
      const emptyQuestions: number[] = this.questionService.checkEmptyQuestion(
        this.questions
      );

      if (emptyQuestions.length === 0) {
        const updatedQuestions = await this.questionService.updateQuestion(
          this.questions,
          setQuestionId
        );
        this.updateQuestions(updatedQuestions);
        router.push({
          name: "list-questions",
          params: { setQuestionId, questionId: this.questions[0].id },
        });
      } else {
        const modal = useModalStore();
        modal.openModal(
          "content question are empty at question: " +
            printListNumber(emptyQuestions)
        );
      }
    },
  },
});
