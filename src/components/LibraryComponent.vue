<template>
  <div class="bg padding-t">
    <div class="container">
      <div><FilterBar /></div>
      <div v-if="totalSelected > 0">
        <SelectAllBar
          :checked="totalSelected == setQuestions.length"
          @click-check-all="clickCheckAll"
          >{{ totalSelected }}</SelectAllBar
        >
      </div>
      <div v-if="setQuestions.length > 0">
        <SetQuestion
          v-for="(setQuestion, index) in setQuestions"
          :key="index"
          :set-question="setQuestion"
          :author="getShortEmail"
          :index="index"
          @click-check-box="clickCheckBox"
          @show-list-questions="showListQuestions"
          @start-game="createRoom"
          @update-favorite="updateFavorite"
          @update-status="updateStatus"
          @delete-set-question="deleteSet"
        />
      </div>
      <div v-else><NotFound /></div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, watch, onMounted } from "vue";
import { storeToRefs } from "pinia";
import type { Ref } from "vue";
import FilterBar from "./FilterBar/FilterBar.vue";
import SetQuestion from "@/components/SetQuestion/SetQuestion.vue";
import SelectAllBar from "@/components/Library/SelectAllBar.vue";
import NotFound from "./Library/NotFound.vue";
import { useUserStore, useSearchStore, useSetQuestionStore } from "@/store";
import { router } from "@/router";
import { useGetSetQuestion } from "@/hooks";
import { LaravelEchoService, RoomService } from "@/services";
import Swal from "sweetalert2";
import { useToast } from "vue-toast-notification";

const totalSelected: Ref<number> = ref(0);
const { getShortEmail } = storeToRefs(useUserStore());
const { text } = storeToRefs(useSearchStore());
const { setQuestions, getData } = useGetSetQuestion();

const { updateFavorite, updateStatus, deleteSetQuestion } =
  useSetQuestionStore();
watch(text, async function (newValue: string): Promise<boolean> {
  await getData();
  setQuestions.value = setQuestions.value.filter((item) =>
    item.name ? item.name.includes(newValue) : ""
  );
  return true;
});

const createRoom = async (setQuestionId: number) => {
  await new RoomService().createRoom(setQuestionId);
};

const calculateTotal = () => {
  totalSelected.value = setQuestions.value.reduce((total, item) => {
    return item.isChecked ? (total += 1) : total;
  }, 0);
};
const clickCheckBox = (index: number) => {
  setQuestions.value = setQuestions.value.map((item, indexArr) =>
    index === indexArr ? { ...item, isChecked: !item.isChecked } : { ...item }
  );
  calculateTotal();
};
const clickCheckAll = (checkedStatus: boolean) => {
  setQuestions.value = setQuestions.value.map((item) => ({
    ...item,
    isChecked: checkedStatus,
  }));
  calculateTotal();
};
const showListQuestions = (id: number) => {
  return router.push({
    name: "list-questions",
    params: {
      setQuestionId: id,
      questionId: -1,
    },
  });
};
const deleteSet = (id: number) => {
  Swal.fire({
    title: "Do you want to Delete?",
    showCancelButton: true,
    confirmButtonText: "Yes",
  }).then(async (result) => {
    if (result.isConfirmed) {
      await deleteSetQuestion(id);
      useToast().success("delete successful");
    }
  });
};
onMounted(async () => {
  await getData();
  LaravelEchoService.init();
});
</script>
<style scoped>
.bg {
  height: 94vh;
}
</style>
