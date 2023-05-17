<template>
  <div class="p-2">
    <div class="container-profile-component">
      <div class="head">
        <div class="head-text"><strong>My Kahoot</strong></div>
      </div>
      <div class="center">
        <template
          v-for="(setQuestion, index) in setQuestions"
          :key="setQuestion.id"
        >
          <MyKahootQuestion v-if="index < noNumberShow">
            <template #question>
              {{ setQuestion.questions_count }}
            </template>
            <template #name>
              {{ setQuestion.name.toUpperCase() }}
            </template>
            <template #author>{{ getShortEmail }}</template>
          </MyKahootQuestion>
        </template>
      </div>
      <div class="footer text-center">
        <div class="view">
          <router-link to="library"
            >See all {{ setQuestions.length - noNumberShow }}</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import MyKahootQuestion from "./MyKahoot/MyKahootQuestion.vue";
import { useGetSetQuestion } from "@/hooks";
import { useUserStore } from "@/store";
import { storeToRefs } from "pinia";
import { onMounted, ref } from "vue";
const noNumberShow = ref(3);
const { setQuestions, getData } = useGetSetQuestion();
const userStore = useUserStore();
const { getShortEmail } = storeToRefs(userStore);
onMounted(() => {
  getData();
});
</script>
<style scoped>
.head {
  border-bottom: 0.25px solid #898989;
}
.head-text {
  /* background-color: aquamarine; */
  padding-bottom: 10px;
  width: 100px;
  border-bottom: 3px solid #1768ce;
}
.center {
  padding-top: 15px;
}
.footer {
  padding-bottom: 10px;
}
</style>
