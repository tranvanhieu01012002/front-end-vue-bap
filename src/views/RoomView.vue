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
    <NextQuestionButton @next="startGame">Start</NextQuestionButton>
  </div>
  <BasicModal>
    <p>oh can not start game without any users</p>
  </BasicModal>
</template>
<script setup lang="ts">
import UserInfo from "@/interfaces/UserInfo";
import { defineProps, ref, onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useQuestionStore, useUserStore } from "@/store/";
import UserInfoVue from "../components/User/UserInfoVue.vue";
import CycleLoader from "@/components/Loader/CycleLoader.vue";
import BasicModal from "@/components/Modal/BasicModal.vue";
import { LaravelEchoService } from "@/services";
import NextQuestionButton from "@/components/Button/NextQuestionButton.vue";
import { ResponseResult } from "@/interfaces";
import { useModalStore } from "@/store/";
import { useNextQuestion } from "@/hooks";
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  setQuestionId: {
    type: String,
    required: true,
  },
});
const users = ref([] as UserInfo[]);
const { getQuestion } = useQuestionStore();
const { openModal } = useModalStore();
const { roomOwnerId } = storeToRefs(useUserStore());

const {
  receiveNextQuestionWithTime,
  receiveShowDataWithTime,
  nextQuestionWithTime,
} = useNextQuestion();
const startGame = () => {
  if (users.value.length >= 0) {
    nextQuestionWithTime();
  } else {
    openModal("Open a room");
  }
};
onMounted(() => {
  LaravelEchoService.init();
  window.Echo.join(`room.${props.id}`)
    .here((users: UserInfo[]) => {
      // if (this.roomOwnerService.checkRoomOwner()) {
      //   this.users = [];
      // } else {
      //   console.log(this.roomOwnerId);
      //   this.users = users;
      // }
      console.log("full user before filter", users);
      users = users.filter((user) => user.id !== roomOwnerId.value);
    })
    .joining((user: UserInfo) => {
      if (user.id !== roomOwnerId.value) {
        users.value.push(user);
      }
      console.log(user, "joining...");
    })
    .leaving((user: UserInfo) => {
      users.value = users.value.filter(
        (userInRoom) => !(userInRoom.id === user.id)
      );
      console.log(user, "leaving");
    })
    .listen("RoomEvent", (e: unknown) => {
      receiveNextQuestionWithTime();
      console.log(e);
    })
    .listen("ShowResult", (e: ResponseResult) => {
      console.log("show result", e);
      receiveShowDataWithTime(e.data);
    });
  getQuestion(+props.setQuestionId);
});
</script>
