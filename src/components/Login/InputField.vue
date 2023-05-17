<template>
  <div>
    <h4 class="text-center"><strong>Login</strong></h4>
    <form @submit="onSubmit">
      <div class="input-field d-flex flex-column mg-t-15">
        <label class="f-size-14"><strong>Username or email</strong></label>
        <input v-model="userInfo.email" class="input" type="text" />
      </div>
      <div class="input-field d-flex flex-column mg-t-15">
        <label class="f-size-14"><strong>Password</strong></label>
        <div class="input d-flex justify-content-between">
          <input
            v-model="userInfo.password"
            class="password"
            :type="isShow ? 'text' : 'password'"
          />
          <font-awesome-icon
            :onclick="allowShow"
            class="password-icon"
            :icon="['fas', isShow ? 'eye' : 'eye-slash']"
          />
        </div>
      </div>
      <div class="f-size-14 mg-t-15">
        Forgot password? <a href="#">Reset your password</a>
      </div>
      <button type="submit" class="btn btn-success mg-t-15">Login</button>
      <p v-if="isError" class="f-size-14 text-danger">
        Your username, email, or password is incorrect. Re-enter your
        information or reset your password.
      </p>
    </form>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { Account } from "@/interfaces";
import UserRepository from "@/helpers/axios/UserRepository";
import axios from "axios";
import { useAuthStore, useUserStore } from "@/store";
import nProgress from "nprogress";
import { storeToRefs } from "pinia";
import { useRouter, useRoute } from "vue-router";

const userInfo = ref<Account>({ email: "", password: "" });
const isShow = ref(false);
const isError = ref(false);
const authStore = useAuthStore();
const userStore = useUserStore();
const { isLogin } = storeToRefs(authStore);
const router = useRouter();
const route = useRoute();
const { setIsLogin } = authStore;
const { updateUser } = userStore;

const onSubmit = async (event: Event) => {
  event.preventDefault();
  const formPost = new UserRepository("auth/login");
  try {
    const { data } = await formPost.login(userInfo.value);
    localStorage.setItem("token", data.token);
    updateUser(data.user);
    setIsLogin(!!isLogin);
    const { redirect } = route.query;
    const routeRedirect = redirect ? redirect.toString() : "/";
    return router.push(routeRedirect);
  } catch (error: unknown) {
    isError.value = true;
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 401) {
        resetFormAfterSubmit();
      }
    } else {
      throw new Error("different error than axios");
    }
  } finally {
    resetFormAfterSubmit();
  }
};

const onReset = () => {
  userInfo.value = { email: "", password: "" };
};

const resetFormAfterSubmit = () => {
  onReset();
  nProgress.done();
  window.setTimeout(() => {
    isError.value = false;
  }, 5 * 1000);
};

const allowShow = () => {
  isShow.value = !isShow.value;
};
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
.password {
  all: unset;
  height: 100%;
}
.password-icon {
  padding-top: 12px;
  padding-right: 10px;
}
.btn {
  width: 100%;
}
</style>
