<template>
  <div class="p-2">
    <div class="container-profile-component">
      <div class="center-component">
        <div>
          <b-card no-body>
            <b-tabs card>
              <b-tab title="Course sessions" active>
                <TabContent />
              </b-tab>
              <b-tab title="Courses">
                <TabContent />
              </b-tab>
            </b-tabs>
          </b-card>
        </div>
      </div>
    </div>
    <div class="container-profile-component">
      <div class="">Top picked</div>
      <div class="center-component">
        <MyKahootQuestion
          v-for="setQuestion in publishQuestions"
          left-css="col-md-3"
          right-css="col-md-9"
          :key="setQuestion.id"
        >
          <template #question>
            {{ setQuestion.questions_count }}
          </template>
          <template #name>
            {{ setQuestion.name }}
          </template>
          <template #author>
            {{ setQuestion.username }}
          </template>
          <template #fork>
            <font-awesome-icon
              :onclick="() => openForkModal(setQuestion.id)"
              class="btn btn-success"
              :icon="['fas', 'code-fork']"
          /></template>
        </MyKahootQuestion>
      </div>
    </div>
  </div>
  <basic-modal @on-ok="fork">Really</basic-modal>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import TabContent from "./Center/TabContent.vue";
import MyKahootQuestion from "./MyKahoot/MyKahootQuestion.vue";
import SetQuestionRepository from "@/helpers/axios/setQuestionRepository";
import SetQuestionPublish from "@/interfaces/SetQuestion/SetQuestionPublishInterface";
import { useModalStore } from "@/store";
import BasicModal from "../Modal/BasicModal.vue";
import { SetQuestionService } from "@/services";
import { useToast } from "vue-toast-notification";
const publishQuestions = ref<SetQuestionPublish[]>([]);
const currentIdSetQuestion = ref(0);
const { openModal } = useModalStore();

const openForkModal = (id: number) => {
  openModal("Do you want to fork this repo to your owner");
  currentIdSetQuestion.value = id;
};

const fork = async () => {
  const setQuestionSer = new SetQuestionService();
  await setQuestionSer.forkSetQuestion(currentIdSetQuestion.value);
  const toast = useToast();
  toast.success("fork set question successful", {
    position: "top-right",
    duration: 5000,
  });
};

onMounted(async () => {
  const setQuestionRepo = new SetQuestionRepository();
  const { data } = await setQuestionRepo.getPublishQuestion();
  publishQuestions.value = data;
});
</script>
<style scoped>
.center-component {
  padding-bottom: 30px;
}

.container-profile-component {
  margin-top: 20px;
}
</style>
