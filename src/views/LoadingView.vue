<template>
  <h2>Hihi waiting a little, please</h2>
  <CycleLoader />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import CycleLoader from "@/components/Loader/CycleLoader.vue";
export default defineComponent({
  props: {
    id: {
      type: String,
      required: true,
    },
    questionId: {
      type: String,
      required: true,
    },
  },
  components: {
    CycleLoader,
  },
});
</script>
