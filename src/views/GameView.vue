<template>
  <div class="container-game">
    <div>Kahoot game</div>
    <div class="bottom"></div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({});
</script>
<style scoped>
.container-game {
  background-color: #381272;
  height: 94vh;
  position: relative;
  overflow: hidden;
}
.bottom {
  position: absolute;
  width: 40vw;
  height: 40vw;
  background-color: #321067;
  border-radius: 50%;
  bottom: -10vw;
  right: -10vw;
}
</style>
