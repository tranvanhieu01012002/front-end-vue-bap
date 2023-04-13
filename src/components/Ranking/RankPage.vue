<template>
  <div>ranking page</div>
  <div>
    <b-table striped hover :items="showListUser" :fields="fields"></b-table>
    <QuestionResult :correct="isCorrect" />
    <NextQuestionButton @next="nextQuestion">Next Question</NextQuestionButton>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import NextQuestionButton from "../Button/NextQuestionButton.vue";
import QuestionResult from "../Question/QuestionResult.vue";
import { nextQuestionMixin } from "@/mixins";
export default defineComponent({
  components: {
    NextQuestionButton,
    QuestionResult,
  },
  mixins: [nextQuestionMixin],
  data() {
    return {
      fields: ["ranking", "user_name", "score"],
      items: [
        {
          _rowVariant: "danger",
        },
        {
          _rowVariant: "warning",
        },
        {
          _rowVariant: "success",
        },
      ],
    };
  },
  computed: {
    showListUser() {
      const list = this.resultData;
      return list.map((user, index) => {
        if (this.items[index]) {
          return {
            ...user,
            ranking: index + 1,
            _rowVariant: this.items[index]._rowVariant,
          };
        } else {
          return { ...user, ranking: index + 1 };
        }
      });
    },
  },
});
</script>
