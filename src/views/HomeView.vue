<template>
  <div class="bg">
    <div class="container">
      <!-- <OpenGame /> -->
      <div class="row">
        <ProfileComponent class="col-3" />
        <ProfileComponent class="col-6" />
        <ProfileComponent class="col-3" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"; // @ is an alias to /src
// import OpenGame from "@/components/SelectGame/OpenGame.vue";
import ProfileComponent from "@/components/Home/ProfileComponent.vue";
import { LaravelEchoService } from "@/services";

export default defineComponent({
  name: "HomeView",
  components: {
    // OpenGame,
    ProfileComponent,
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
