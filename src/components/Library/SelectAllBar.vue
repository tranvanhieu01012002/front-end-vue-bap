<template>
  <div class="select-bar d-flex flex-column justify-content-center">
    <div class="d-flex justify-content-between">
      <div class="left d-flex padding-t-select-all-bar">
        <input
          v-model="checkAll"
          @input="
            $emit('clickCheckAll', ($event.target as HTMLInputElement).checked)
          "
          type="checkbox"
          class="input-checkbox"
        />
        <div>Select All</div>
      </div>
      <div class="center padding-t-select-all-bar"><slot></slot> selected</div>
      <div class="right">
        <button class="btn btn-success">delete</button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      checkAll: false,
    };
  },
  emits: ["clickCheckAll"],
});
</script>
<style scoped>
.select-bar {
  width: 100%;
  background-color: #1768ce;
  color: #ffff;
  padding: 10px;
  border-radius: 5px;
}
.padding-t-select-all-bar {
  padding-top: 6px;
}
.input-checkbox {
  margin-right: 10px;
}
</style>
