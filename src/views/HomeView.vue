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

export default defineComponent({
  name: "HomeView",
  components: {
    HelloWorld,
    OpenGame,
  },
  mounted() {
    console.log(2);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    // window.Echo.channel("channel").listen("SendMessage", (e: any) => {
    //   // https://viblo.asia/p/lam-the-nao-de-su-dung-laravel-voi-socketio-Ljy5VWVoKra
    //   console.log(e);
    // });
  },
});
</script>
