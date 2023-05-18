<template>
  <div>ranking page</div>
  <div>
    <b-table striped hover :items="showListUser" :fields="fields"></b-table>
    <QuestionResult :correct="isCorrect" />
    <NextQuestionButton @next="nextQuestionWithTime"
      >Next Question</NextQuestionButton
    >
  </div>
</template>
<script setup lang="ts">
import { ref, computed } from "vue";
import NextQuestionButton from "../Button/NextQuestionButton.vue";
import QuestionResult from "../Question/QuestionResult.vue";
import { useNextQuestion } from "@/hooks";

const { resultData, isCorrect, nextQuestionWithTime } = useNextQuestion();
const fields = ref(["ranking", "user_name", "score"]);
const items = ref([
  {
    _rowVariant: "danger",
  },
  {
    _rowVariant: "warning",
  },
  {
    _rowVariant: "success",
  },
]);

const showListUser = computed(() => {
  const list = resultData.value;
  return list.map((user, index) => {
    if (items.value[index]) {
      return {
        ...user,
        ranking: index + 1,
        _rowVariant: items.value[index]._rowVariant,
      };
    } else {
      return { ...user, ranking: index + 1 };
    }
  });
});
</script>
