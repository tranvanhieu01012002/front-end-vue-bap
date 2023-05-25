<template>
  <div class="login-view d-flex justify-content-center align-items-center">
    <div class="top"></div>
    <LoginContainer />
    <div class="bottom"></div>
  </div>
</template>
<script setup lang="ts">
import LoginContainer from "@/components/Login/LoginContainer.vue";
</script>
<style scoped>
.login-view {
  background-color: var(--bg-component);
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
}
.bottom {
  position: absolute;
  width: 40vw;
  height: 40vw;
  background-color: #ebebeb;
  border-radius: 50%;
  bottom: -10vw;
  left: -10vw;
}
.top {
  position: absolute;
  width: 25vw;
  height: 25vw;
  background-color: #ebebeb;
  top: -10vw;
  right: -10vw;
  transform: rotate(45deg);
}
</style>
