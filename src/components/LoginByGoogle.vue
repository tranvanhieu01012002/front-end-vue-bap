<template>
  <button class="btn btn-primary" @click="login">Login Using Google</button>
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
