<template>
  <div class="bg">
    <div class="container">
      <!-- <OpenGame /> -->
      <div class="row">
        <ProfileComponent class="col-3" />
        <DoubleComponent class="col-6" />
        <ProfileComponent class="col-3" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"; // @ is an alias to /src
// import OpenGame from "@/components/SelectGame/OpenGame.vue";
import ProfileComponent from "@/components/Home/ProfileComponent.vue";
import DoubleComponent from "@/components/Home/DoubleComponent.vue";
import { LaravelEchoService } from "@/services";

export default defineComponent({
  name: "HomeView",
  components: {
    // OpenGame,
    ProfileComponent,
    DoubleComponent,
  },
  created() {
    LaravelEchoService.init();
  },
});
</script>
<style scoped>
.bg {
  background-color: #fafafa;
  height: 94vh;
}
</style>
