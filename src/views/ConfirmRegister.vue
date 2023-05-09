<template>
  <div>Confirm</div>
  <div>We just send to you an email, please confirm it</div>
  <button class="btn btn-warning">resend email</button>
</template>
<script lang="ts">
import { AuthService } from "@/services";
import { defineComponent } from "vue";
export default defineComponent({
  data: function () {
    return {
      verifyEmail: false,
    };
  },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  methods: {
    async hasVerifiedEmail() {
      const authService = new AuthService();
      const response = await authService.hasVerifiedEmail(this.id);
      if (response) {
        this.$router.push({ path: "/" });
      }
    },
  },
  async mounted() {
    await this.hasVerifiedEmail();
  },
});
</script>
