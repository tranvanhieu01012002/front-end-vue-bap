<template>
  <button class="btn btn-primary">Login by Google</button>
  <GoogleLogin :callback="callback" />
</template>
<script setup lang="ts">
const callback = (response: any) => {
  // This callback will be triggered when the user selects or login to
  // his Google account from the popup
  console.log("Handle the response", response);
};
</script>
