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
    <NextQuestionButton>Start</NextQuestionButton>
  </div>
</template>
<script lang="ts">
import UserInfo from "@/interfaces/UserInfo";
import { defineComponent } from "vue";
import { mapActions, mapState } from "pinia";
import { useQuestionStore, useUserStore } from "@/store/";
import UserInfoVue from "../components/User/UserInfoVue.vue";
import CycleLoader from "@/components/Loader/CycleLoader.vue";
import { LaravelEchoService } from "@/services";
import NextQuestionButton from "@/components/Button/NextQuestionButton.vue";
import { nextQuestionMixin } from "@/mixins";
export default defineComponent({
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  mixins: [nextQuestionMixin],
  components: {
    UserInfoVue,
    CycleLoader,
    NextQuestionButton,
  },
  computed: {
    ...mapState(useUserStore, ["roomOwner"]),
  },
  methods: {
    ...mapActions(useQuestionStore, ["getQuestion"]),
  },
  data() {
    return {
      users: [] as UserInfo[],
      laravelEcho: new LaravelEchoService(),
    };
  },
  created() {
    this.laravelEcho.init();
  },
  mounted() {
    // window.Echo.private("room.1").listen("SendMessage", (e: any) => {
    //   // https://viblo.asia/p/lam-the-nao-de-su-dung-laravel-voi-socketio-Ljy5VWVoKra
    //   this.users.push({ name: "hieu dz", email: "hieu@gmail.com", id: "111" });
    //   console.log("call dc r ne");
    // });
    window.Echo.join(`room.${this.id}`)
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
      .listen("RoomEvent", (e: any) => {
        // this.nexQuestion();
        console.log(e);
      });
    this.getQuestion();
    console.log(window.Echo.socketId());
  },
});
</script>
