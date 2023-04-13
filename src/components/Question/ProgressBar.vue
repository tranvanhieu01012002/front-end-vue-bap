<template>
  <div>
    <BProgress
      show-progress
      height="2rem"
      :value="timeBar"
      animated
    ></BProgress>
  </div>
  <button v-on:click="startTimeBar">start</button>
  <button v-on:click="resetTimeBar">restart</button>
  <button v-on:click="clearTimeBar">start</button>
</template>
<script lang="ts">
import { nextQuestionMixin } from "@/mixins";
import { defineComponent } from "vue";
import { useTimerStore } from "@/store";
import { mapActions, mapWritableState } from "pinia";
export default defineComponent({
  mixins: [nextQuestionMixin],
  computed: {
    ...mapWritableState(useTimerStore, [
      "timer",
      "timeBar",
      "startTime",
      "totalTime",
    ]),
  },
  methods: {
    ...mapActions(useTimerStore, [
      "progressBar",
      "clearTimeBar",
      "resetTimeBar",
      "startTimeBar",
    ]),
  },
});
</script>
