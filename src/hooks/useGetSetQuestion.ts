import SetQuestionRepository from "@/helpers/axios/setQuestionRepository";
import { SetQuestionResponse } from "@/interfaces";
import { useSetQuestionStore } from "@/store";
import { storeToRefs } from "pinia";

export const useGetSetQuestion = () => {
  const setQuestionStore = useSetQuestionStore();
  const { getSetQuestions, setQuestions } = storeToRefs(setQuestionStore);

  const getData = async () => {
    if (getSetQuestions.value.length === 0) {
      const setQuestionRepo = new SetQuestionRepository("set-questions");
      const { data } = await setQuestionRepo.getAll();
      setQuestions.value = data.map((item: SetQuestionResponse) => ({
        ...item,
        isChecked: false,
      }));
      setQuestionStore.updateSetQuestion(setQuestions.value);
    } else {
      setQuestions.value = getSetQuestions.value;
    }
  };
  return { setQuestions, getData };
};
