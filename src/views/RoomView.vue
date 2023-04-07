<template>
  <div>
    <h1>Welcome to room: {{ id }}</h1>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
});
</script>
