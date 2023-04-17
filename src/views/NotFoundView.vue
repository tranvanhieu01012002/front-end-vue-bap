<template>
  <div class="container">
    <h1>Not found</h1>
    <h2>{{ hello }}</h2>
    <PageQuestion question-id="1" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import gql from "graphql-tag";
import PageQuestion from "@/components/Question/PageQuestion.vue";
export default defineComponent({
  name: "UserView",
  components: {
    PageQuestion,
  },
  apollo: {
    hello: gql`
      query {
        hello
      }
    `,
  },
  data() {
    return {
      hello: "",
    };
  },
});
</script>
