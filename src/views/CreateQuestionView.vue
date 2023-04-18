<template>
  <div>create question view</div>
  <PageQuestion question-id="5" />
  <ListFormQuestionVue />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import PageQuestion from "@/components/Question/PageQuestion.vue";
import ListFormQuestionVue from "@/components/FormQuestion/ListFormQuestion.vue";
export default defineComponent({
  props: {
    setQuestionId: {
      type: String,
      required: true,
    },
  },
  components: {
    PageQuestion,
    ListFormQuestionVue,
  },
  mounted() {
    console.log(this.setQuestionId);
  },
});
</script>
