<template>
  <div>ranking page</div>
  <div>
    <b-table striped hover :items="showListUser" :fields="fields"></b-table>
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
      if (list instanceof Array) {
        return list.map((user, index) => {
          console.log("user in map", user);
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
      }
      return list;
    },
  },
});
</script>
