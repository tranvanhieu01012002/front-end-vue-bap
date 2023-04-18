<template>
  <b-modal @ok="onsubmit" centered v-model="isOpen" :title="name">
    <slot></slot>
  </b-modal>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapState, mapWritableState } from "pinia";
import { useModalStore } from "@/store";
export default defineComponent({
  computed: {
    ...mapWritableState(useModalStore, ["isOpen", "isOk"]),
    ...mapState(useModalStore, ["name"]),
  },
  methods: {
    onsubmit() {
      this.isOk = true;
      this.closeModal();
    },
    ...mapActions(useModalStore, ["openModal", "closeModal"]),
  },
});
</script>
