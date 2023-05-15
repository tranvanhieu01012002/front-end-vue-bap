<template>
  <div class="bg padding-t">
    <div class="container">
      <div><FilterBar /></div>
      <div>
        <SetQuestion
          v-for="(setQuestion, index) in setQuestions"
          :key="index"
          :set-question="setQuestion"
          :author="getShortEmail"
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import FilterBar from "./FilterBar/FilterBar.vue";
import SetQuestion from "@/components/SetQuestion/SetQuestion.vue";
import { SetQuestionResponse } from "@/interfaces";
import SetQuestionRepository from "@/helpers/axios/setQuestionRepository";
import { mapState } from "pinia";
import { useUserStore } from "@/store";
export default defineComponent({
  data() {
    return {
      setQuestions: [] as SetQuestionResponse[],
      setQuestionRepository: new SetQuestionRepository("set-questions"),
    };
  },
  components: {
    FilterBar,
    SetQuestion,
  },
  computed: {
    ...mapState(useUserStore, ["getShortEmail"]),
  },
  async mounted() {
    const { data } = await this.setQuestionRepository.getAll();
    this.setQuestions = data;
  },
});
</script>
<style scoped>
.bg {
  height: 94vh;
}
</style>
