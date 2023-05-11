<template>
  <div class="count-user padding-top">
    <CenterText>
      <span>More</span>
      <h2>{{ users.toLocaleString("en-US") }}</h2>
      <span>players a year</span>
    </CenterText>
    <div class="list-aw container-div">
      <div class="row">
        <AnswerComponent
          v-for="answer in answers"
          :key="answer.shape"
          :answer="answer"
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import CenterText from "../SecondMain/CenterText.vue";
import AnswerComponent from "../AnswerComponent.vue";
import { listAnswersWithShape } from "@/store/listAnswers";
export default defineComponent({
  data() {
    return {
      answers: listAnswersWithShape,
      users: 10000000,
    };
  },
  components: {
    CenterText,
    AnswerComponent,
  },
});
</script>
<style scoped>
.count-user {
  background-color: #f2f2f2;
  height: 30vh;
  margin-top: var(--padding-top-main);
}
</style>
