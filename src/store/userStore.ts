import { defineStore } from "pinia";
import type UserInfo from "@/interfaces/UserInfo";

export const useUserStore = defineStore("userStore", {
  state: () => {
    return {
      user: {} as UserInfo,
    };
  },
  getters: {
    getUsername(): string | null {
      return this.user.email;
    },
  },
  actions: {
    updateUser(user: UserInfo) {
      this.user = user;
    },
  },
});
