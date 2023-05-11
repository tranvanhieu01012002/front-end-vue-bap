<template>
  <div class="col-6">
    <div>answer view</div>
    <div class="list-answer d-flex flex-column justify-content-between">
      <AnswerComponent
        :answer="answer"
        v-for="answer in answers"
        :key="answer.character"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { PropType, defineComponent } from "vue";
import AnswerComponent from "./AnswerComponent.vue";
import { AnswerInterface } from "@/interfaces";
export default defineComponent({
  props: {
    answers: {
      type: Object as PropType<Array<AnswerInterface>>,
      required: true,
    },
  },
  components: {
    AnswerComponent,
  },
});
</script>
<style scoped>
.list-answer {
  height: 90%;
}
</style>
