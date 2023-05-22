<template>
  <div v-if="isAlert">
    <BaseAlert :alert-prop="{ content: 'delete success', status: 'success' }" />
  </div>
  <div class="d-flex justify-content-between">
    <h2>List set question</h2>
    <button
      v-if="!isChooseRoom"
      @click="() => openModal('Add set question')"
      class="btn btn-primary"
    >
      Create new set question
    </button>
  </div>
  <div class="row">
    <template
      v-for="setQuestion in handleShowSetQuestion"
      :key="setQuestion.id"
    >
      <SetQuestionComponentVue
        :is-choose-room="isChooseRoom"
        v-on:list-questions="openListQuestions"
        v-on:delete="deleteSetQuestion"
        :set-question="setQuestion"
        v-on:update-name="updateName"
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
import RoomService from "@/services/roomService";
import { router } from "@/router";
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
    handleShowSetQuestion(): Array<SetQuestion> {
      return this.isChooseRoom
        ? this.setQuestions.filter((question) => question.questions_count > 0)
        : this.setQuestions;
    },
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
      await this.setQuestionRepository.delete(id);
      this.setQuestions = this.setQuestions.filter((item) => item.id !== id);
      this.showAlert();
    },
    async openListQuestions(id: number) {
      if (this.isChooseRoom) {
        await this.createRoom(id);
      } else {
        router.push({
          name: "list-questions",
          params: {
            setQuestionId: id,
            questionId: -1,
          },
        });
      }
    },
    async createRoom(setQuestionId: number) {
      console.log("vo day be");
      await new RoomService().createRoom(setQuestionId);
    },

    async updateName(setQuestionId: string, newName: string) {
      const { data } = await this.setQuestionRepository.updateSetQuestion(
        setQuestionId,
        {
          name: newName,
          id: +setQuestionId,
          // set default question count because use the setQUestion interface,
          // this property not show in BE
          questions_count: -1,
        }
      );
      this.setQuestions = data;
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
      isChooseRoom: this.$router.currentRoute.value.path.includes(
        "rooms-set-questions"
      ),
    };
  },
  async mounted() {
    const { data } = await this.setQuestionRepository.getAll();
    this.setQuestions = data;
  },
});
</script>
