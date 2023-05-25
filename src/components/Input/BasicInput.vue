<template>
  <div class="input-field d-flex flex-column mg-t-15">
    <label class="f-size-14"
      ><strong><slot name="label"></slot></strong
    ></label>
    <input
      @input="event => emits('input',( event.target as HTMLInputElement).value)"
      :value="props.value"
      class="input"
      :type="props.type"
      :checked="props.checked"
      :placeholder="props.placeholder"
    />
  </div>
</template>
<script setup lang="ts">
import { defineProps, defineEmits, withDefaults } from "vue";

interface Props {
  type: string;
  placeholder?: string;
  value?: string;
  checked?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  type: "text",
});
const emits = defineEmits(["input"]);
</script>
<style scoped>
.mg-t-15 {
  margin-top: 15px;
}
.input {
  height: 45px;
  width: 100%;
  border: 1px solid #000;
  border-radius: 5px;
}
.f-size-14 {
  font-size: 14px;
}
</style>
