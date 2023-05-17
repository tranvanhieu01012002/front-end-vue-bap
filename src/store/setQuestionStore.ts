import { computed, ref } from "vue";
import { SetQuestionResponse } from "@/interfaces";
import { defineStore } from "pinia";
export const useSetQuestionStore = defineStore("setQuestionStore", () => {
  const setQuestions = ref<SetQuestionResponse[]>([]);
  const getSetQuestions = computed((): SetQuestionResponse[] => {
    return setQuestions.value;
  });
  const updateSetQuestion = (setQuestionsInput: SetQuestionResponse[]) => {
    setQuestions.value = setQuestionsInput;
  };
  return { setQuestions, getSetQuestions, updateSetQuestion };
});
