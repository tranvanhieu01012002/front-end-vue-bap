<template>
  <div class="container">
    <PageQuestion v-if="isLoaded" :question-id="questionId" />
    <ListFormQuestionVue />
    <BasicModal>
      <p>sai r cu</p>
    </BasicModal>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import PageQuestion from "@/components/Question/PageQuestion.vue";
import ListFormQuestionVue from "@/components/FormQuestion/ListFormQuestion.vue";
import { mapActions, mapState } from "pinia";
import { useQuestionStore } from "@/store";
import { router } from "@/router";
import BasicModal from "@/components/Modal/BasicModal.vue";
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
    BasicModal,
  },
  methods: {
    ...mapActions(useQuestionStore, ["getQuestion"]),
    redirectIfStart() {
      if (parseInt(this.questionId) === -1) {
        router.push({
          name: "list-questions",
          params: {
            setQuestions: this.setQuestionId,
            questionId: this.questions[0].id,
          },
        });
      }
    },
  },
  computed: {
    ...mapState(useQuestionStore, ["questions"]),
  },
  data() {
    return {
      isLoaded: false,
    };
  },
  async created() {
    await this.getQuestion(parseInt(this.setQuestionId));
    this.redirectIfStart();
    this.isLoaded = true;
  },
});
</script>
