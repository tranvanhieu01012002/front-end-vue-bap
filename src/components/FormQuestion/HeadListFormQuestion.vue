<template>
  <div class="d-flex justify-content-between b-padding">
    <QuestionBarVue />
    <div class="d-flex">
      <button @click="addNewQuestion" class="btn btn-success m-2">
        add new
      </button>
      <button
        @click="
          () => saveQuestion($router.currentRoute.value.params.setQuestionId)
        "
        class="btn btn-primary m-2"
      >
        Save
      </button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { mapActions } from "pinia";
import { useQuestionStore } from "@/store";
import QuestionBarVue from "../Question/QuestionBar.vue";

export default defineComponent({
  components: {
    QuestionBarVue,
  },
  methods: {
    ...mapActions(useQuestionStore, ["addNewQuestion", "saveQuestion"]),
  },
});
</script>
