import { defineComponent } from "vue";
import { mapActions } from "pinia";
import { useQuestionStore } from "@/store";
export default defineComponent({
  data: function () {
    return {
      totalTime: 60, //s
      startTime: 60,
      timeBar: 100, //%
      step: 0.1,
      timeEachStep: 100,
    };
  },
  methods: {
    ...mapActions(useQuestionStore, ["nextQuestion"]),
  },
});
