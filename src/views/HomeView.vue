<template>
  <div class="bg">
    <div class="container">
      <!-- <OpenGame /> -->
      <div class="row">
        <ProfileComponent class="col-xxl-3 col-md-6 col-sm-12" />
        <DoubleComponent class="col-xxl-6 col-md-6 col-sm-12" />
        <MyKahootComponent class="col-xxl-3 col-md-6 col-sm-12" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"; // @ is an alias to /src
// import OpenGame from "@/components/SelectGame/OpenGame.vue";
import ProfileComponent from "@/components/Home/ProfileComponent.vue";
import DoubleComponent from "@/components/Home/DoubleComponent.vue";
import MyKahootComponent from "@/components/Home/MyKahootComponent.vue";
import { LaravelEchoService } from "@/services";

export default defineComponent({
  name: "HomeView",
  components: {
    // OpenGame,
    ProfileComponent,
    DoubleComponent,
    MyKahootComponent,
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
