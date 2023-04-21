<template>
  <HeadListFormQuestion />
  <div class="d-flex list">
    <div>
      <Draggable
        class="d-flex"
        v-model="questionsInComponent"
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
import HeadListFormQuestion from "./HeadListFormQuestion.vue";
import Draggable from "vuedraggable";
import { Question } from "@/interfaces";
export default defineComponent({
  components: {
    FormQuestion,
    Draggable,
    HeadListFormQuestion,
  },
  methods: {
    ...mapActions(useQuestionStore, ["updateQuestions"]),
  },
  computed: {
    ...mapState(useQuestionStore, ["questions"]),
    questionsInComponent: {
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
      load: false,
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
