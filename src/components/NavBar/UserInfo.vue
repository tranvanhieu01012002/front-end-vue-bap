<template>
  <b-nav-item-dropdown right>
    <template #button-content>
      <em>User</em>
    </template>
    <div class="text-center">User: {{ getUsername }}</div>
    <b-dropdown-item href="#">Profile</b-dropdown-item>
    <b-dropdown-item @click="logout"> Log Out</b-dropdown-item>
  </b-nav-item-dropdown>
</template>
<script setup lang="ts">
import { useGetUserInfo } from "@/hooks";
import { AuthService } from "@/services";
import Swal from "sweetalert2";
const { getUsername } = useGetUserInfo();

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
