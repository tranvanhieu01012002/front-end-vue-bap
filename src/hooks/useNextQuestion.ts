import { storeToRefs } from "pinia";
import { useQuestionStore, useTimerStore } from "@/store";
import { UserRank } from "@/interfaces";
export const useNextQuestion = () => {
  const questionStore = useQuestionStore();
  const timerStore = useTimerStore();
  const { timer } = timerStore;
  const { resultData, isCorrect } = storeToRefs(questionStore);
  const { startTimeBar, resetTimeBar, clearTimeBar } = timerStore;
  const {
    viewResultStore,
    nextQuestion,
    receiveNextQuestion,
    answerQuestion,
    receiveShowData,
  } = questionStore;

  const showResultWithTime = async (): Promise<void> => {
    await viewResultStore();
    clearTimeBar();
  };
  const nextQuestionWithTime = () => {
    resetTimeBar();
    nextQuestion();
  };
  const receiveShowDataWithTime = (result: Array<UserRank>) => {
    clearTimeBar();
    receiveShowData(result);
  };

  const receiveNextQuestionWithTime = () => {
    resetTimeBar();
    startTimeBar();
    receiveNextQuestion();
  };

  const answerQuestionWithTime = (isCorrect: boolean) => {
    clearTimeBar();
    answerQuestion(isCorrect);
  };
  return {
    timer,
    resultData,
    isCorrect,
    showResultWithTime,
    nextQuestionWithTime,
    receiveNextQuestionWithTime,
    answerQuestionWithTime,
    receiveShowDataWithTime,
  };
};
