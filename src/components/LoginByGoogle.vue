<template>
  <button class="btn btn-primary">Login by Google</button>
  <GoogleLogin :callback="callback" prompt auto-login />
  <button @click="logout" class="btn btn-success">logout</button>
</template>
<script setup lang="ts">
import { googleLogout } from "vue3-google-login";

const callback = (response: any) => {
  // This callback will be triggered when the user selects or login to
  // his Google account from the popup
  console.log("Handle the response", response);
};

const logout = (): void => {
  googleLogout();
  alert("logout");
};
</script>
