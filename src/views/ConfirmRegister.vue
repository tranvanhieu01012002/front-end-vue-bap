<template>
  <div>Confirm</div>
  <div>We just send to you an email, please confirm it</div>
  <button :disabled="!allowSend" @click="resend" class="btn btn-warning">
    resend email {{ allowSend ? "" : time }}
  </button>
</template>
<script lang="ts">
import { AuthService } from "@/services";
import { defineComponent } from "vue";
export default defineComponent({
  data: function () {
    return {
      authService: new AuthService(),
      time: 60,
      timer: 0,
      allowSend: true,
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
      const response = await this.authService.hasVerifiedEmail(this.id);
      if (response) {
        this.$router.push({ path: "/" });
      }
    },
    async resend() {
      await this.authService.resendEmail(this.id);
      this.allowSend = false;
      this.timer = window.setInterval(() => {
        this.time--;
        if (this.time == 0) {
          clearInterval(this.timer);
          this.time = 60;
          this.allowSend = true;
        }
      }, 1000);
    },
  },
  async created() {
    await this.hasVerifiedEmail();
  },
});
</script>
