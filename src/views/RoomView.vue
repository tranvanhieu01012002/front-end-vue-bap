<template>
  <div class="room-view">
    <div class="d-flex justify-content-center">
      <TopContent :id="props.id" />
    </div>
    <div class="container">
      <div class="row d-flex justify-content-center">
        <UserInfoVue v-for="(user, index) in users" :user="user" :key="index" />
      </div>
    </div>
    <div v-if="users.length == 0">
      <div class="d-flex justify-content-center">
        <img class="kahoot-logo" src="@/assets/images/kahoot_logo.svg" />
      </div>
      <div class="d-flex justify-content-center">
        <div class="waiting-alert"><strong>Waiting for players… </strong></div>
      </div>
    </div>
    <div class="bottom-right d-flex">
      <NextQuestionButton class="btn-start" @next="startGame"
        >Start</NextQuestionButton
      >
      <SettingComponent>{{ users.length }}</SettingComponent>
    </div>
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
import BasicModal from "@/components/Modal/BasicModal.vue";
import { LaravelEchoService } from "@/services";
import NextQuestionButton from "@/components/Button/NextQuestionButton.vue";
import { ResponseResult } from "@/interfaces";
import { useModalStore } from "@/store/";
import { useNextQuestion } from "@/hooks";
import TopContent from "@/components/RoomComponent/TopContent.vue";
import SettingComponent from "@/components/RoomComponent/SettingComponent.vue";
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
onMounted(() => {
  console.log(props.id);
});
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
    .here((usersInRoom: UserInfo[]) => {
      // if (this.roomOwnerService.checkRoomOwner()) {
      //   this.users = [];
      // } else {
      //   console.log(this.roomOwnerId);
      //   this.users = users;
      // }
      console.log("full user before filter", usersInRoom);
      users.value = usersInRoom.filter((user) => user.id !== roomOwnerId.value);
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
<style scoped>
.room-view {
  background-color: #cccccc;
  background-image: url("@/assets/images/bg-game.jpg");
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
  align-items: end;
  height: 94vh;
  position: relative;
}
.kahoot-logo {
  margin-top: 100px;
  width: 100px;
}
.waiting-alert {
  padding: 5px 20px;
  font-size: 30px;
  color: #fff;
  background-color: #46178f;
  margin-top: 100px;
}
.bottom-right {
  position: absolute;
  bottom: 10px;
  right: 10px;
}
.btn-start {
  margin-right: 10px;
}
</style>
