<template>
  <div>list here</div>
  <div class="d-flex list">
    <FormQuestion
      :question="question"
      v-for="question in questions"
      :key="question.id"
    />
    <div class="col-3">
      <button @click="addNewQuestion" class="btn btn-success">add new</button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapState } from "pinia";
import { useQuestionStore } from "@/store";
import FormQuestion from "./FormQuestion.vue";

export default defineComponent({
  components: {
    FormQuestion,
  },
  methods: {
    ...mapActions(useQuestionStore, ["addNewQuestion"]),
  },
  computed: {
    ...mapState(useQuestionStore, ["questions"]),
  },
  data() {
    return {
      formQuestions: 0,
    };
  },
});
</script>
<style scoped>
.list {
  overflow: auto;
  white-space: nowrap;
}
</style>
