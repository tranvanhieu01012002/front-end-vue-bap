<template>
  <div class="bg-component col-6">
    <TopComponent />
    <div class="form row">
      <div
        @click="choseImg"
        class="img d-flex justify-content-center align-items-center col-3"
      >
        <font-awesome-icon class="icon" :icon="['fas', 'camera']" />
        <input ref="input" @change="onChange" class="hide" type="file" />
      </div>
      <div class="col-9">
        <BasicInput><template #label>Name</template></BasicInput>
        <BasicInput><template #label>Email</template></BasicInput>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, defineProps, PropType } from "vue";
import TopComponent from "./TopComponent.vue";
import BasicInput from "../Input/BasicInput.vue";
import { UserInfo } from "@/interfaces";
const props = defineProps({
  user: {
    type: Object as PropType<UserInfo>,
    required: true,
  },
});
const input = ref();
const choseImg = () => {
  (input.value as HTMLInputElement).click();
};
const onChange = () => {
  console.log("alo aloe");
};
</script>
<style scoped>
.col-6 {
  background-color: #fff;
}
.img {
  height: 130px;
  width: 130px;
  background-color: #969393;
  border: 2px dotted #52c675;
}
.hide {
  display: none;
}
.icon {
  font-size: 40px;
}
</style>
