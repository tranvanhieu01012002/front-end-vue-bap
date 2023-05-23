import { computed, ref } from "vue";
import { SetQuestion, SetQuestionResponse } from "@/interfaces";
import { defineStore } from "pinia";
import SetQuestionRepository from "@/helpers/axios/setQuestionRepository";
export const useSetQuestionStore = defineStore("setQuestionStore", () => {
  const setQuestions = ref<SetQuestionResponse[]>([]);
  const getSetQuestions = computed((): SetQuestionResponse[] => {
    return setQuestions.value;
  });
  const getFavorite = () => {
    setQuestions.value = setQuestions.value.filter((item) => item.favorite);
  };
  const updateSetQuestion = (setQuestionsInput: SetQuestionResponse[]) => {
    setQuestions.value = setQuestionsInput;
  };

  const updateFavorite = async (
    id: number,
    status: boolean
  ): Promise<SetQuestionResponse[]> => {
    const setQuestionDefault: SetQuestion = {
      id: -1,
      questions_count: -1,
      favorite: status,
    };
    return await updateSetQuestionRepo(id, setQuestionDefault);
  };

  const updateStatus = async (
    id: number,
    status: string
  ): Promise<SetQuestionResponse[]> => {
    const setQuestionDefault: SetQuestion = {
      id: -1,
      questions_count: -1,
      status,
    };
    return await updateSetQuestionRepo(id, setQuestionDefault);
  };

  const updateSetQuestionRepo = async (
    id: number,
    setQuestion: SetQuestion
  ) => {
    const setQuestionsRepo = new SetQuestionRepository();

    const { data } = await setQuestionsRepo.updateSetQuestion(
      id + "",
      setQuestion
    );
    setQuestions.value = data;
    return data;
  };

  const deleteSetQuestion = async (id: number) => {
    const setQuestionRepo = new SetQuestionRepository();
    await setQuestionRepo.deleteSetQuestion(id);
    setQuestions.value = setQuestions.value.filter((item) => item.id !== id);
  };

  return {
    setQuestions,
    getSetQuestions,
    updateSetQuestion,
    updateFavorite,
    getFavorite,
    updateStatus,
    deleteSetQuestion,
  };
});
