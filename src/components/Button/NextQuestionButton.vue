<template>
  <button
    v-show="isRoomOwner"
    v-on:click="$emit('next')"
    class="btn btn-warning"
  >
    <slot></slot>
  </button>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { isRoomOwnerMixin } from "@/mixins";
export default defineComponent({
  emits: ["next"],
  mixins: [isRoomOwnerMixin],
});
</script>
