<template>
  <button v-show="isOwner" v-on:click="nextQuestion" class="btn btn-warning">
    <slot></slot>
  </button>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { nextQuestionMixin } from "@/mixins";
import { RoomOwnerService } from "@/services";
export default defineComponent({
  mixins: [nextQuestionMixin],
  data() {
    return {
      isOwner: new RoomOwnerService().checkRoomOwner(),
    };
  },
});
</script>
