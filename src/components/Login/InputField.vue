<template>
  <div>
    <h4 class="text-center"><strong>Login</strong></h4>
    <form>
      <div class="input-field d-flex flex-column mg-t-15">
        <label class="f-size-14"><strong>Username or email</strong></label>
        <input class="input" type="text" />
      </div>
      <div class="input-field d-flex flex-column mg-t-15">
        <label class="f-size-14"><strong>Password</strong></label>
        <div class="input d-flex justify-content-between">
          <input class="password" :type="isShow ? 'text' : 'password'" />
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
      <button class="btn btn-success mg-t-15">Login</button>
    </form>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
const isShow = ref(false);
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
