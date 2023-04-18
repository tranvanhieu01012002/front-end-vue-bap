<template>
  <div :class="showAlertStatus" role="alert">
    <h5>{{ alertProp.content }}</h5>
  </div>
</template>
<script lang="ts">
import { PropType, defineComponent } from "vue";
import { Alert } from "@/interfaces";
export default defineComponent({
  props: {
    alertProp: {
      type: Object as PropType<Alert>,
      required: true,
    },
  },
  computed: {
    showAlertStatus(): string {
      return `alert alert-${this.alertProp.status}`;
    },
  },
});
</script>
