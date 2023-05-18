<template>
  <div class="col-6">
    <div class="list-answer d-flex flex-column justify-content-between">
      <AnswerComponent
        :answer="answer"
        v-for="(answer, index) in answersWithShape"
        :key="index"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { PropType, defineProps, computed } from "vue";
// import AnswerComponent from "./AnswerComponent.vue";
import AnswerComponent from "../AnswerComponent.vue";
import { AnswerInterface, AnswerWithShapeInterface } from "@/interfaces";
import { listAnswersWithShape } from "@/store/listAnswers";

const props = defineProps({
  answers: {
    type: Object as PropType<Array<AnswerInterface>>,
    required: true,
  },
});
const answersWithShape = computed((): AnswerWithShapeInterface[] => {
  const shapes = listAnswersWithShape;
  return props.answers.map((item, index) => ({
    ...item,
    ...shapes[index],
  }));
});
</script>
<style scoped>
.list-answer {
  height: 90%;
}
</style>
