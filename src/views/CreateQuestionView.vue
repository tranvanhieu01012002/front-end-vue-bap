<template>
  <div>create question view</div>
  <PageQuestion v-if="isLoaded" :question-id="questionId" />
  <ListFormQuestionVue />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import PageQuestion from "@/components/Question/PageQuestion.vue";
import ListFormQuestionVue from "@/components/FormQuestion/ListFormQuestion.vue";
import { mapActions, mapWritableState } from "pinia";
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
  computed: {
    ...mapWritableState(useQuestionStore, ["currentQuestionIndex"]),
  },
  methods: {
    ...mapActions(useQuestionStore, ["getQuestion"]),
  },
  data() {
    return {
      isLoaded: false,
    };
  },
  async created() {
    await this.getQuestion();
    this.isLoaded = true;
    this.currentQuestionIndex = parseInt(this.questionId);
  },
});
</script>
