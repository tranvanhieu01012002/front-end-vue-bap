<template>
  <div>
    <h1>Welcome to room: {{ id }}</h1>
    <div class="alert alert-primary" role="alert">
      Current User:
      <div class="btn btn-success">{{ users.length }}</div>
    </div>
    <CycleLoader />
    <div class="row">
      <UserInfoVue v-for="(user, index) in users" :user="user" :key="index" />
    </div>
    <NextQuestionButton @next="nextQuestionMixinFn">Start</NextQuestionButton>
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
import { ResponseResult } from "@/interfaces";
import { isRoomOwnerMixin } from "@/mixins";
export default defineComponent({
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  mixins: [nextQuestionMixin, isRoomOwnerMixin],
  components: {
    UserInfoVue,
    CycleLoader,
    NextQuestionButton,
  },
  methods: {
    ...mapActions(useQuestionStore, ["getQuestion", "receiveShowData"]),
  },
  computed: {
    ...mapState(useUserStore, ["roomOwnerId"]),
  },
  data() {
    return {
      users: [] as UserInfo[],
    };
  },
  created() {
    LaravelEchoService.init();
  },
  mounted() {
    window.Echo.join(`room.${this.id}`)
      .here((users: UserInfo[]) => {
        // if (this.roomOwnerService.checkRoomOwner()) {
        //   this.users = [];
        // } else {
        //   console.log(this.roomOwnerId);
        //   this.users = users;
        // }
        console.log("full user before filter", users);
        this.users = users.filter((user) => user.id !== this.roomOwnerId);
      })
      .joining((user: UserInfo) => {
        if (user.id !== this.roomOwnerId) {
          this.users.push(user);
        }
        console.log(user, "joining...");
      })
      .leaving((user: UserInfo) => {
        this.users = this.users.filter(
          (userInRoom) => !(userInRoom.id === user.id)
        );
        console.log(user, "leaving");
      })
      .listen("RoomEvent", (e: unknown) => {
        this.receiveNextQuestionMixin();
        console.log(e);
      })
      .listen("ShowResult", (e: ResponseResult) => {
        console.log("show result", e);
        this.receiveShowDataMixin(e.data);
      });
    this.getQuestion();
  },
  // beforeUnmount() {
  //   this.roomOwnerService.removeRoomOwner();
  // },
});
</script>
