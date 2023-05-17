<template>
  <div class="login-container d-flex flex-column">
    <InputField />
    <OrHr />
    <div class="list-third-party">
      <ThirdParty />
      <ThirdParty />
      <ThirdParty />
      <ThirdParty />
    </div>
    <div class="bottom text-center">
      Don't have an account? <a href="#">Sign up</a>
    </div>
  </div>
</template>
<script setup lang="ts">
import InputField from "./InputField.vue";
import ThirdParty from "./ThirdPartyComponent.vue";
import OrHr from "./OrHr.vue";
</script>
<style scoped>
.login-container {
  z-index: 1;
  background-color: #fff;
  width: 425px;
  padding: 20px;
  box-shadow: 0px 3px 3px 2px #8888;
}
@media screen and (max-width: 400px) {
  .login-container {
    width: 90vw;
  }
}
</style>
