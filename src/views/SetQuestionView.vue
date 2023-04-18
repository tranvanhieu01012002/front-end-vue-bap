<template>
  <div v-if="isAlert">
    <BaseAlert :alert-prop="{ content: 'delete success', status: 'success' }" />
  </div>
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
      <SetQuestionComponentVue
        v-on:delete="deleteSetQuestion"
        :set-question="setQuestion"
      />
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
import { mapActions, mapWritableState } from "pinia";
import { useModalStore } from "@/store";
import { SetQuestion } from "@/interfaces";
import SetQuestionRepository from "@/helpers/axios/setQuestionRepository";
import { alertMixin } from "@/mixins";

import SetQuestionComponentVue from "@/components/SetQuestion/SetQuestionComponent.vue";
import BasicModal from "@/components/Modal/BasicModal.vue";
import BaseAlert from "@/components/BaseAlert.vue";
export default defineComponent({
  mixins: [alertMixin],
  components: {
    SetQuestionComponentVue,
    BasicModal,
    BaseAlert,
  },
  computed: {
    ...mapWritableState(useModalStore, ["isOk"]),
  },
  methods: {
    ...mapActions(useModalStore, ["openModal"]),
    async addNewSetQuestion() {
      const { data } = await this.setQuestionRepository.post({
        name: this.text,
      });
      this.setQuestions.push(data);
      this.text = "";
    },
    async deleteSetQuestion(id: number) {
      console.log(id);
      await this.setQuestionRepository.delete(id);
      this.setQuestions = this.setQuestions.filter((item) => item.id !== id);
      this.showAlert();
    },
  },
  watch: {
    isOk(newValue: boolean) {
      if (newValue) {
        this.isOk = false;
        this.addNewSetQuestion();
      }
      return true;
    },
  },
  data() {
    return {
      setQuestions: [] as SetQuestion[],
      setQuestionRepository: new SetQuestionRepository("set-questions"),
      text: "",
    };
  },
  async mounted() {
    const { data } = await this.setQuestionRepository.getAll();
    this.setQuestions = data;
  },
});
</script>
