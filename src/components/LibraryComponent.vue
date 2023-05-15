<template>
  <div class="bg padding-t">
    <div class="container">
      <div><FilterBar /></div>
      <div v-if="totalSelected > 0">
        <SelectAllBar @click-check-all="clickCheckAll">{{
          totalSelected
        }}</SelectAllBar>
      </div>
      <form>
        <SetQuestion
          v-for="(setQuestion, index) in setQuestions"
          :key="index"
          :set-question="setQuestion"
          :author="getShortEmail"
          :index="index"
          @click-check-box="clickCheckBox"
        />
      </form>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import FilterBar from "./FilterBar/FilterBar.vue";
import SetQuestion from "@/components/SetQuestion/SetQuestion.vue";
import { SetQuestionResponse } from "@/interfaces";
import SetQuestionRepository from "@/helpers/axios/setQuestionRepository";
import { mapState } from "pinia";
import { useUserStore } from "@/store";
import SelectAllBar from "@/components/Library/SelectAllBar.vue";

export default defineComponent({
  data() {
    return {
      totalSelected: 0,
      setQuestions: [] as SetQuestionResponse[],
      setQuestionRepository: new SetQuestionRepository("set-questions"),
    };
  },
  components: {
    FilterBar,
    SetQuestion,
    SelectAllBar,
  },
  computed: {
    ...mapState(useUserStore, ["getShortEmail"]),
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
  },
  async created() {
    const { data } = await this.setQuestionRepository.getAll();
    this.setQuestions = data.map((item: SetQuestionResponse) => ({
      ...item,
      isChecked: false,
    }));
  },
});
</script>
<style scoped>
.bg {
  height: 94vh;
}
</style>
