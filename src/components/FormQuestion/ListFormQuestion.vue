<template>
  <div class="d-flex justify-content-end b-padding">
    <button @click="addNewQuestion" class="btn btn-success">add new</button>
  </div>
  <div class="d-flex list">
    <div>
      <Draggable
        class="d-flex"
        v-model="questions1"
        group="people"
        item-key="id"
      >
        <template #item="{ element }">
          <FormQuestion :question="element" :key="element.id" />
        </template>
      </Draggable>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapState } from "pinia";
import { useQuestionStore } from "@/store";
import FormQuestion from "./FormQuestion.vue";
import Draggable from "vuedraggable";
import { Question } from "@/interfaces";
export default defineComponent({
  components: {
    FormQuestion,
    Draggable,
  },
  methods: {
    ...mapActions(useQuestionStore, ["addNewQuestion", "updateQuestions"]),
  },
  computed: {
    ...mapState(useQuestionStore, ["questions", "getQuestions"]),
    questions1: {
      get(): Array<Question> {
        return this.questions;
      },
      set(newQuestions: Array<Question>) {
        this.updateQuestions(newQuestions);
      },
    },
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
.b-padding {
  padding-bottom: 10px;
}
</style>
