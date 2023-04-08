<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>|
    <router-link to="/login">Login</router-link>|
    <router-link to="/users">Users</router-link>
  </nav> -->
  <nav-link></nav-link>
</template>
<script lang="ts">
import NavLink from "./components/NavLink.vue";
export default {
  components: {
    NavLink,
  },
  created() {
    console.log("create status");
    window.Echo.private("room.1").listen("SendMessage", (e: any) => {
      // https://viblo.asia/p/lam-the-nao-de-su-dung-laravel-voi-socketio-Ljy5VWVoKra
      console.log(e);
      console.log("call dc r ne");
    });
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
