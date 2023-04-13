<template>
  <div>
    <BProgress
      show-progress
      height="2rem"
      :value="timeBar"
      animated
    ></BProgress>
  </div>
</template>
<script lang="ts">
import { nextQuestionMixin } from "@/mixins";
import { defineComponent } from "vue";
import { useTimerStore } from "@/store";
import { mapWritableState } from "pinia";
export default defineComponent({
  mixins: [nextQuestionMixin],
  computed: {
    ...mapWritableState(useTimerStore, ["timeBar"]),
  },
});
</script>
