<template>
  <div>list here</div>
  <div class="d-flex list">
    <FormQuestion v-for="n in formQuestions" :key="n" />
    <div class="col-3">
      <button @click="addNewQuestion" class="btn btn-success">add new</button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import FormQuestion from "./FormQuestion.vue";
export default defineComponent({
  components: {
    FormQuestion,
  },
  methods: {
    addNewQuestion() {
      this.formQuestions++;
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
</style>
