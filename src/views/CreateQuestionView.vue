<template>
  <div>create question view</div>
  <PageQuestion :question-id="questionId" />
  <ListFormQuestionVue />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import PageQuestion from "@/components/Question/PageQuestion.vue";
import ListFormQuestionVue from "@/components/FormQuestion/ListFormQuestion.vue";
import { mapActions } from "pinia";
import { useQuestionStore } from "@/store";
export default defineComponent({
  props: {
    setQuestionId: {
      type: String,
      required: true,
    },
    questionId: {
      type: String,
      required: true,
    },
  },
  components: {
    PageQuestion,
    ListFormQuestionVue,
  },
  methods: {
    ...mapActions(useQuestionStore, ["getQuestion"]),
  },
  mounted() {
    this.getQuestion();
  },
});
</script>
