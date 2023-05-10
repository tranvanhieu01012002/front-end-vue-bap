<template>
  <div class="second-main">
    <TopSecondMain />
    <VideoSecondMain />
    <BottomSecondMain />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import TopSecondMain from "./TopSecondMain.vue";
import VideoSecondMain from "./VideoSecondMain.vue";
import BottomSecondMain from "./BottomSecondMain.vue";

export default defineComponent({
  components: {
    TopSecondMain,
    VideoSecondMain,
    BottomSecondMain,
  },
});
</script>
<style scoped>
.second-main {
  width: 60vw;
  margin: 0px auto;
}
</style>
