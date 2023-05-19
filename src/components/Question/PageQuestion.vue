<template>
  <div class="page-question padding-t">
    <div v-if="!editable.status" class="m-2">
      <ProgressBar />
    </div>
    <div class="row" v-if="getListCurrentAnswers.length !== 0">
      <QuestionLeft
        @update-question-content="updateQuestion"
        class="col-xl-6 col-sm-12 col-xs-12"
        :question="getContentQuestion"
      />
      <ListAnswers
        class="col-xl-6 col-sm-12 col-xs-12"
        :answers="getListCurrentAnswers"
      />
    </div>
    <NextQuestionButton v-if="!editable.status" @next="showResultWithTime"
      >Stop</NextQuestionButton
    >
  </div>
</template>
<script setup lang="ts">
import { defineProps, ref } from "vue";
import { storeToRefs } from "pinia";
import QuestionLeft from "./QuestionLeft.vue";
import ListAnswers from "./ListAnswers.vue";
import NextQuestionButton from "../Button/NextQuestionButton.vue";
import ProgressBar from "./ProgressBar.vue";
import { useNextQuestion } from "@/hooks";
import { useQuestionStore } from "@/store/";
import { EnableEditQuestion } from "@/services";

const props = defineProps({
  questionId: {
    type: String,
    required: true,
  },
});

const editable = ref(new EnableEditQuestion());

const { showResultWithTime } = useNextQuestion();
const questionStore = useQuestionStore();

const { getContentQuestion, getListCurrentAnswers, questions } =
  storeToRefs(questionStore);
const { updateQuestions } = questionStore;

const updateQuestion = (text: string) => {
  updateQuestions(
    questions.value.map((item) =>
      item.id == props.questionId ? { ...item, content: text } : item
    )
  );
};
</script>
