<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <b-button>Button</b-button>
  <label class="sr-only" for="inline-form-input-name">Name</label>
  <b-form-input class="mb-2" placeholder="Jane Doe"></b-form-input>
  <blog-test />
</template>
<script lang="ts">
import BlogTest from "@/components/BlogTest.vue";
export default {
  components: {
    BlogTest,
  },
};
</script>
