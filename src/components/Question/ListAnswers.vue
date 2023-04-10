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
import { defineComponent } from "vue";
import AnswerComponent from "./AnswerComponent.vue";
import listAnswers from "@/store/listAnswers";
export default defineComponent({
  data() {
    return {
      answers: listAnswers,
    };
  },
  components: {
    AnswerComponent,
  },
});
</script>
<style scoped>
.col-6 {
  background-color: rgb(157, 0, 255);
}
.list-answer {
  height: 90%;
}
</style>
