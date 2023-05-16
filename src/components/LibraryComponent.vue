<template>
  <div class="bg padding-t">
    <div class="container">
      <div><FilterBar /></div>
      <div v-if="totalSelected > 0">
        <SelectAllBar @click-check-all="clickCheckAll">{{
          totalSelected
        }}</SelectAllBar>
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
        />
      </div>
      <div v-else><NotFound /></div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import FilterBar from "./FilterBar/FilterBar.vue";
import SetQuestion from "@/components/SetQuestion/SetQuestion.vue";
import SelectAllBar from "@/components/Library/SelectAllBar.vue";
import NotFound from "./Library/NotFound.vue";
import { mapState } from "pinia";
import { useUserStore } from "@/store";
import { useSearchStore } from "@/store";
import { router } from "@/router";
import { SetQuestionResponse } from "@/interfaces";
import SetQuestionRepository from "@/helpers/axios/setQuestionRepository";
import { LaravelEchoService, RoomService } from "@/services";
export default defineComponent({
  data() {
    return {
      totalSelected: 0,
      setQuestions: [] as SetQuestionResponse[],
      setQuestionRepository: new SetQuestionRepository("set-questions"),
    };
  },
  watch: {
    text: async function (newValue: string): Promise<boolean> {
      await this.getData();
      this.setQuestions = this.setQuestions.filter((item) =>
        item.name.includes(newValue)
      );
      return true;
    },
  },
  components: {
    FilterBar,
    SetQuestion,
    SelectAllBar,
    NotFound,
  },
  computed: {
    ...mapState(useUserStore, ["getShortEmail"]),
    ...mapState(useSearchStore, ["text"]),
  },
  methods: {
    calculateTotal: function () {
      this.totalSelected = this.setQuestions.reduce((total, item) => {
        return item.isChecked ? (total += 1) : total;
      }, 0);
    },
    clickCheckBox: function (index: number) {
      this.setQuestions = this.setQuestions.map((item, indexArr) =>
        index === indexArr
          ? { ...item, isChecked: !item.isChecked }
          : { ...item }
      );
      this.calculateTotal();
    },
    clickCheckAll: function (checkedStatus: boolean) {
      this.setQuestions = this.setQuestions.map((item) => ({
        ...item,
        isChecked: checkedStatus,
      }));
      this.calculateTotal();
    },
    async getData() {
      const { data } = await this.setQuestionRepository.getAll();
      this.setQuestions = data.map((item: SetQuestionResponse) => ({
        ...item,
        isChecked: false,
      }));
    },
    showListQuestions: function (id: number) {
      return router.push({
        name: "list-questions",
        params: {
          setQuestionId: id,
          questionId: -1,
        },
      });
    },
    async createRoom(setQuestionId: number) {
      console.log(1);
      await new RoomService().createRoom(setQuestionId);
    },
  },
  async created() {
    await this.getData();
    LaravelEchoService.init();
  },
});
</script>
<style scoped>
.bg {
  height: 94vh;
}
</style>
