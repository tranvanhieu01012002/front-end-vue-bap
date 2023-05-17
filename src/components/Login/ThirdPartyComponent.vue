<template>
  <div @click="login" class="component d-flex justify-content-between">
    <img src="@/assets/images/google-99694fa3.svg" />
    <div class="text-center">
      <div>Login by google</div>
    </div>
    <div class="div"></div>
  </div>
</template>
<script setup lang="ts">
import { googleTokenLogin } from "vue3-google-login";
import UserRepository from "@/helpers/axios/UserRepository";
import { useRouter } from "vue-router";

const router = useRouter();

const login = async () => {
  try {
    const { access_token } = await googleTokenLogin();
    const userRepository = new UserRepository();
    const response = await userRepository.loginByGoogle(access_token);
    localStorage.setItem("token", response.data.token);
    return router.push({ path: "/" });
  } catch (error) {
    console.log("oh err", error);
  }
};
</script>
<style scoped>
.component {
  border: 1px solid #000;
  padding: 10px 5px;
  border-radius: 8px;
  margin-bottom: 10px;
}
</style>
