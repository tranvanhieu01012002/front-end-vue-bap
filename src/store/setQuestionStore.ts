import { computed, ref } from "vue";
import { SetQuestion, SetQuestionResponse } from "@/interfaces";
import { defineStore } from "pinia";
import SetQuestionRepository from "@/helpers/axios/setQuestionRepository";
export const useSetQuestionStore = defineStore("setQuestionStore", () => {
  const setQuestions = ref<SetQuestionResponse[]>([]);
  const getSetQuestions = computed((): SetQuestionResponse[] => {
    return setQuestions.value;
  });
  const updateSetQuestion = (setQuestionsInput: SetQuestionResponse[]) => {
    setQuestions.value = setQuestionsInput;
  };

  const updateFavorite = async (
    id: number,
    status: boolean
  ): Promise<SetQuestionResponse[]> => {
    const setQuestionsRepo = new SetQuestionRepository();
    const setQuestionDefault: SetQuestion = {
      id: -1,
      questions_count: -1,
    };
    const { data } = await setQuestionsRepo.updateSetQuestion(id + "", {
      ...setQuestionDefault,
      favorite: status,
    });
    setQuestions.value = data;
    return data;
  };
  return { setQuestions, getSetQuestions, updateSetQuestion, updateFavorite };
});
