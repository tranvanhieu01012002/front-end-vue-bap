<template>
  <h2>Login form</h2>
  <LoginForm />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import LoginForm from "@/components/Form/LoginForm.vue";
export default defineComponent({
  name: "LoginView",
  components: {
    LoginForm,
  },
});
</script>
