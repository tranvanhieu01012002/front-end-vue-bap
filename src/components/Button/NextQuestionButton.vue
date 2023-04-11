<template>
  <button v-show="roomOwner" v-on:click="nexQuestion" class="btn btn-warning">
    <slot></slot>
  </button>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { mapState } from "pinia";
import { useUserStore } from "@/store/";
import { QuestionService } from "@/services";
export default defineComponent({
  data: function () {
    return {
      questionService: new QuestionService(),
    };
  },
  computed: {
    ...mapState(useUserStore, ["roomOwner"]),
  },
  methods: {
    nexQuestion() {
      this.questionService.nextQuestion();
    },
  },
});
</script>
