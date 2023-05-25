<template>
  <div class="plan bg-component profile-child-block">
    <div class="d-flex d-flex justify-content-between">
      <div class="left"><slot name="left"></slot></div>
      <div>
        <strong><slot name="right"></slot></strong>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({});
</script>
<style scoped>
.plan {
  font-size: 14px;
}
.left {
  font-weight: bolder;
  color: #6e6e6e;
}
.link {
  color: #242424;
}
</style>
