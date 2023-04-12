<template>
  <button v-show="isOwner" v-on:click="$emit('next')" class="btn btn-warning">
    <slot></slot>
  </button>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { RoomOwnerService } from "@/services";
export default defineComponent({
  emits: ["next"],
  data() {
    return {
      isOwner: new RoomOwnerService().checkRoomOwner(),
    };
  },
});
</script>
