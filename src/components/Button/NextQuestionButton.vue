<template>
  <button v-show="roomOwner" v-on:click="nexQuestion" class="btn btn-warning">
    <slot></slot>
  </button>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { mapState } from "pinia";
import { useUserStore } from "@/store/";
import { nextQuestionMixin } from "@/mixins";
export default defineComponent({
  mixins: [nextQuestionMixin],
  computed: {
    ...mapState(useUserStore, ["roomOwner"]),
  },
});
</script>
