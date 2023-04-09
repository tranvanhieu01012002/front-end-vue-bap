<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<template>
  <div>
    <h1>Welcome to room: {{ id }}</h1>
    users{{ users.length }}
    <div class="row">
      <UserInfoVue v-for="(user, index) in users" :user="user" :key="index" />
    </div>
    <button class="btn btn-success" v-on:click="warn">add new</button>
  </div>
</template>
<script lang="ts">
import UserInfo from "@/interfaces/UserInfo";
import { defineComponent } from "vue";
import UserInfoVue from "../components/User/UserInfoVue.vue";
export default defineComponent({
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      users: [{ name: "hieu dz", email: "hieu@gmail.com" }] as UserInfo[],
    };
  },
  components: {
    UserInfoVue,
  },
  methods: {
    warn() {
      this.users.push({ name: "hieu dz", email: "hieu@gmail.com", id: "111" });
    },
  },
  created() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    // window.Echo.private("room.1").listen("SendMessage", (e: any) => {
    //   // https://viblo.asia/p/lam-the-nao-de-su-dung-laravel-voi-socketio-Ljy5VWVoKra
    //   this.users.push({ name: "hieu dz", email: "hieu@gmail.com", id: "111" });
    //   console.log("call dc r ne");
    // });
    window.Echo.join(`room.1`)
      .here((users: any) => {
        console.log(users);
      })
      .joining((user: any) => {
        console.log(user, "joining...");
      })
      .leaving((user: any) => {
        console.log(user.name, "leaving");
      })
      .error((error: any) => {
        console.error(error);
      });
  },
});
</script>
