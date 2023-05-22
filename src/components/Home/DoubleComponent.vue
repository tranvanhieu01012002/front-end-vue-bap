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
          left-css="col-3"
          right-css="col-9"
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
        </MyKahootQuestion>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import TabContent from "./Center/TabContent.vue";
import MyKahootQuestion from "./MyKahoot/MyKahootQuestion.vue";
import SetQuestionRepository from "@/helpers/axios/setQuestionRepository";
import SetQuestionPublish from "@/interfaces/SetQuestion/SetQuestionPublishInterface";
const publishQuestions = ref<SetQuestionPublish[]>([]);
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
