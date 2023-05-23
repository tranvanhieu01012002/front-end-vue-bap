<template>
  <b-nav-item-dropdown right>
    <template #button-content>
      <em>User</em>
    </template>
    <div class="text-center">User: {{ getUsername }}</div>
    <b-dropdown-item href="#">Profile</b-dropdown-item>
    <b-dropdown-item @click="openLogoutModal"> Log Out</b-dropdown-item>
  </b-nav-item-dropdown>
  <basic-modal @on-ok="logout">Really</basic-modal>
</template>
<script setup lang="ts">
import { useGetUserInfo } from "@/hooks";
import { AuthService } from "@/services";
import { useModalStore } from "@/store";
import BasicModal from "../Modal/BasicModal.vue";

const { getUsername } = useGetUserInfo();

const { openModal } = useModalStore();
const openLogoutModal = () => {
  openModal("Do you want to logout");
};
const logout = () => {
  const authService = new AuthService();
  authService.logout();
};
</script>
