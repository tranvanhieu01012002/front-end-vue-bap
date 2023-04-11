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
    <button
      v-show="roomOwner"
      v-on:click="questionService.nextQuestion()"
      class="btn btn-warning"
    >
      start
    </button>
  </div>
</template>
<script lang="ts">
import UserInfo from "@/interfaces/UserInfo";
import { defineComponent } from "vue";
import { mapActions, mapState } from "pinia";
import { useQuestionStore, useUserStore } from "@/store/";
import UserInfoVue from "../components/User/UserInfoVue.vue";
import CycleLoader from "@/components/Loader/CycleLoader.vue";
import { QuestionService, LaravelEchoService } from "@/services";
export default defineComponent({
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  components: {
    UserInfoVue,
    CycleLoader,
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
      questionService: new QuestionService(),
      laravelEcho: new LaravelEchoService(),
    };
  },
  mounted() {
    // window.Echo.private("room.1").listen("SendMessage", (e: any) => {
    //   // https://viblo.asia/p/lam-the-nao-de-su-dung-laravel-voi-socketio-Ljy5VWVoKra
    //   this.users.push({ name: "hieu dz", email: "hieu@gmail.com", id: "111" });
    //   console.log("call dc r ne");
    // });
    this.laravelEcho
      .getEcho()
      .join(`room.${this.id}`)
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
    this.getQuestion();
  },
});
</script>
