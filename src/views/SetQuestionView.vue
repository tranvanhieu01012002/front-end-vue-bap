<template>
  <div class="d-flex justify-content-between">
    <h2>List set question</h2>
    <button
      @click="() => openModal('Add set question')"
      class="btn btn-primary"
    >
      Create new set question
    </button>
  </div>
  <div class="row">
    <template v-for="setQuestion in setQuestions" :key="setQuestion.id">
      <SetQuestionComponentVue :set-question="setQuestion" />
    </template>
  </div>
  <BasicModal>
    <b-form-group label="Input name">
      <b-form-input v-model="text" id="name-input"></b-form-input>
    </b-form-group>
  </BasicModal>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { mapActions } from "pinia";
import { useModalStore } from "@/store";
import { SetQuestion } from "@/interfaces";
import SetQuestionRepository from "@/helpers/axios/setQuestionRepository";
import SetQuestionComponentVue from "@/components/SetQuestion/SetQuestionComponent.vue";
import BasicModal from "@/components/Modal/BasicModal.vue";
export default defineComponent({
  components: {
    SetQuestionComponentVue,
    BasicModal,
  },
  methods: {
    ...mapActions(useModalStore, ["openModal"]),
  },
  data() {
    return {
      setQuestions: [] as SetQuestion[],
      setQuestionService: new SetQuestionRepository(),
      text: "",
    };
  },
  async mounted() {
    const { data } = await this.setQuestionService.getAll();
    this.setQuestions = data;
  },
});
</script>
