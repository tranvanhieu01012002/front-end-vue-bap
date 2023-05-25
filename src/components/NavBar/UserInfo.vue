<template>
  <b-nav-item-dropdown right>
    <template #button-content>
      <em>User</em>
    </template>
    <div class="text-center">User: {{ getUsername }}</div>
    <b-dropdown-item @click="moveToProfile"> Profile </b-dropdown-item>
    <b-dropdown-item @click="logout"> Log Out</b-dropdown-item>
  </b-nav-item-dropdown>
</template>
<script setup lang="ts">
import { useGetUserInfo } from "@/hooks";
import { router } from "@/router";
import { AuthService } from "@/services";
import { useUserStore } from "@/store";
import { storeToRefs } from "pinia";
import Swal from "sweetalert2";

const { getIdUser } = storeToRefs(useUserStore());
const { getUsername } = useGetUserInfo();

const moveToProfile = () => {
  return router.push({ name: "user detail", params: { id: getIdUser.value } });
};
const logout = () => {
  Swal.fire({
    title: "Do you want to log out?",
    showCancelButton: true,
    confirmButtonText: "Log out",
  }).then((result) => {
    if (result.isConfirmed) {
      const authService = new AuthService();
      authService.logout();
    }
  });
};
</script>
