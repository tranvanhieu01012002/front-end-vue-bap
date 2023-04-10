<template>
  <div class="container">
    <h1>Not found</h1>
    <PageQuestion />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import PageQuestion from "../components/Question/PageQuestion.vue";
export default defineComponent({
  name: "UserView",
  components: {
    PageQuestion,
  },
});
</script>
