<template>
  <nav-link></nav-link>
</template>
<script lang="ts">
import NavLink from "./components/NavLink.vue";
export default {
  components: {
    NavLink,
  },
  created() {
    // window.Echo.private("room.1").listen("SendMessage", (e: any) => {
    //   // https://viblo.asia/p/lam-the-nao-de-su-dung-laravel-voi-socketio-Ljy5VWVoKra
    //   console.log(e);
    //   console.log("call dc r ne");
    // });
  },
};
</script>
<style>
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
