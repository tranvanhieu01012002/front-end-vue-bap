<template>
  <form @submit="onSubmit" class="bg-component col-6">
    <TopComponent />
    <div class="form row">
      <div
        class="col-xxl-3 col-md-8 col-sm-12 d-flex justify-content-center padding-t-min"
      >
        <div class="img d-flex col-3">
          <font-awesome-icon
            @click="choseImg"
            class="icon"
            :icon="['fas', 'camera']"
          />
          <img :src="user.image ?? ''" />
          <input @change="onChange" ref="input" class="hide" type="file" />
        </div>
      </div>
      <div class="col-xxl-9 col-md-8 col-sm-12">
        <BasicInput
          @input="(name) => inputUserValue('name', name, user)"
          type="text"
          :value="user.name"
          ><template #label>Name</template></BasicInput
        >
      </div>
    </div>
    <div class="more-info">
      <MoreInfo />
      <MoreInfo />
    </div>
  </form>
</template>
<script setup lang="ts">
import { ref } from "vue";
import TopComponent from "./TopComponent.vue";
import BasicInput from "../Input/BasicInput.vue";
import MoreInfo from "./MoreInfo.vue";
import { useUserStore } from "@/store";
import { storeToRefs } from "pinia";
import { useInputField } from "@/hooks";
import UserRepository from "@/helpers/axios/UserRepository";
import { useToast } from "vue-toast-notification";

const userStore = useUserStore();
const { user } = storeToRefs(userStore);
const input = ref();
const { inputUserValue } = useInputField();
const { open } = useToast();
const userRepo = new UserRepository();

const choseImg = () => {
  (input.value as HTMLInputElement).click();
};

const onChange = async () => {
  const file = (input.value as HTMLInputElement).files?.[0];
  if (file) {
    try {
      const { data } = await userRepo.updateImage(user.value.id, file);
      user.value.image = data.path;
      open({
        message: "Updated profile",
        type: "success",
        position: "top-right",
      });
    } catch (error: any) {
      console.log(error);
      open({
        message: "Ops, Something were wrong",
        type: "error",
        position: "top-right",
      });
    }
  } else {
    open({
      message: "Ops, Something were wrong",
      type: "error",
      position: "top-right",
    });
  }
};
const onSubmit = async (e: Event) => {
  e.preventDefault();
  try {
    const { data } = await userRepo.updateUser(user.value);
    user.value = data;
    open({
      message: "Updated profile",
      type: "success",
      position: "top-right",
    });
  } catch (e: any) {
    open({
      message: "Ops, Something were wrong",
      type: "error",
      position: "top-right",
    });
  }
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
  position: relative;
}

.hide {
  display: none;
}

.icon {
  font-size: 40px;
  position: absolute;
  top: 45px;
  left: 45px;
}

.padding-t-min {
  padding-top: 20px;
}
</style>
