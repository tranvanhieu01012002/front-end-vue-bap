<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<template>
  <div>
    <h1>Welcome to room: {{ id }}</h1>
    <div class="alert alert-primary" role="alert">
      Current User:
      <spam class="btn btn-success">{{ users.length }}</spam>
    </div>
    <CycleLoader />
    <div class="row">
      <UserInfoVue v-for="(user, index) in users" :user="user" :key="index" />
    </div>
  </div>
</template>
<script lang="ts">
import UserInfo from "@/interfaces/UserInfo";
import Echo from "laravel-echo";
import { defineComponent } from "vue";
import UserInfoVue from "../components/User/UserInfoVue.vue";
import CycleLoader from "@/components/Loader/CycleLoader.vue";
export default defineComponent({
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  beforeCreate() {
    console.log("start Echo");
    const token = localStorage.getItem("token");
    window.Echo = new Echo({
      auth: {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
      broadcaster: "socket.io",
      host: window.location.hostname + ":6001",
      forceTLS: false,
      disableStats: true,
      cluster: "eu",
    });
  },
  data() {
    return {
      users: [] as UserInfo[],
    };
  },
  components: {
    UserInfoVue,
    CycleLoader,
  },
  mounted() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    // window.Echo.private("room.1").listen("SendMessage", (e: any) => {
    //   // https://viblo.asia/p/lam-the-nao-de-su-dung-laravel-voi-socketio-Ljy5VWVoKra
    //   this.users.push({ name: "hieu dz", email: "hieu@gmail.com", id: "111" });
    //   console.log("call dc r ne");
    // });
    window.Echo.join(`room.1`)
      .here((users: UserInfo[]) => {
        this.users = users;
      })
      .joining((user: UserInfo) => {
        this.users.push(user);
        console.log(user, "joining...");
      })
      .leaving((user: UserInfo) => {
        this.users = this.users.filter(
          (userInRoom) => !(userInRoom.id === user.id)
        );
        console.log(user, "leaving");
      })
      .error((error: any) => {
        console.error(error);
      });
  },
});
</script>
