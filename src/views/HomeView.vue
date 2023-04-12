<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
  <OpenGame />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import OpenGame from "@/components/SelectGame/OpenGame.vue";
import { LaravelEchoService, RoomOwnerService } from "@/services";

export default defineComponent({
  name: "HomeView",
  components: {
    HelloWorld,
    OpenGame,
  },
  created() {
    LaravelEchoService.init();
    RoomOwnerService.removeRoomOwner();
  },
});
</script>
