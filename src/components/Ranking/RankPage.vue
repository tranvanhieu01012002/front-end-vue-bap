<template>
  <div>ranking page</div>
  <div>
    <b-table striped hover :items="items" :fields="fields"></b-table>
    <NextQuestionButton @next="nextQuestion">Next Question</NextQuestionButton>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import NextQuestionButton from "../Button/NextQuestionButton.vue";
import { nextQuestionMixin } from "@/mixins";
export default defineComponent({
  components: {
    NextQuestionButton,
  },
  mixins: [nextQuestionMixin],
  data() {
    return {
      fields: ["ranking", "name", "score"],
      items: [
        {
          ranking: 1,
          name: "Dickerson",
          score: 100,
          _rowVariant: "danger",
        },
        {
          ranking: 2,
          name: "Dickerson",
          score: 100,
          _rowVariant: "warning",
        },
        {
          ranking: 3,
          name: "Dickerson",
          score: 100,
          _rowVariant: "success",
        },
        {
          ranking: 4,
          name: "Dickerson",
          score: 100,
          _rowVariant: "success",
        },
      ],
    };
  },
});
</script>
