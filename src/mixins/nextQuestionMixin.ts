import { defineComponent } from "vue";
import { mapActions, mapWritableState } from "pinia";
import { useQuestionStore } from "@/store";
export default defineComponent({
  data: function () {
    return {
      totalTime: 60, //s
      startTime: 60,
      step: 0.1,
      timeEachStep: 100,
    };
  },
  methods: {
    ...mapActions(useQuestionStore, ["nextQuestion"]),
  },
  computed: {
    ...mapWritableState(useQuestionStore, ["timeBar"]),
  },
});
