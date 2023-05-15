<template>
  <div class="question-number">
    <strong><slot></slot> questions</strong>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({});
</script>
<style scoped>
.question-number {
  background-color: #4d4d4d;
  padding: 2px;
  margin-bottom: 5px;
  color: #fff;
  border-radius: 5px;
}
</style>
