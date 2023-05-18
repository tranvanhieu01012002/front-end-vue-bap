<template>
  <div class="d-flex justify-content-center flex-column">
    <div class="top-content d-flex">
      <div class="left d-flex">
        <div class="w-bg link d-flex justify-content-center align-items-center">
          <div class="">
            Join at <strong>www.kahoot.it</strong> or with<strong>
              the Kahoot! app</strong
            >
          </div>
        </div>
        <div class="game-pin w-bg">
          <div class=""><strong>Game Pin:</strong></div>
          <div class="pin">
            <strong>{{ props.id }}</strong>
          </div>
        </div>
      </div>
      <div class="right w-bg">
        <img src="@/assets/images/qr-code.png" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from "vue";
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});
</script>
<style scoped>
.top-content {
  margin-top: 20px;
}

.link {
  padding: 0px 20px;
  width: 300px;
  clip-path: polygon(0% 0%, 90% 0%, 100% 50%, 90% 100%, 0% 100%);
}
.game-pin {
  padding: 10px 10px 0px 10px;
}
.right img {
  width: 150px;
}
.right {
  margin-left: 10px;
}
.w-bg {
  background-color: #fff;
}
.pin {
  font-size: 80px;
}
</style>
