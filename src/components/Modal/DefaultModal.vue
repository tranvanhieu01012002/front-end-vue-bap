<template>
  <b-modal @hidden="hiddenModal" centered v-model="model">
    <slot></slot>
  </b-modal>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    isOpenedModal: {
      type: Boolean,
      required: true,
    },
  },
  emits: ["hiddenModal"],
  data() {
    return {
      model: false,
    };
  },
  watch: {
    isOpenedModal: function (newStatus: boolean) {
      this.model = newStatus;
    },
  },
  methods: {
    hiddenModal: function () {
      this.$emit("hiddenModal", !this.isOpenedModal);
    },
  },
});
</script>
