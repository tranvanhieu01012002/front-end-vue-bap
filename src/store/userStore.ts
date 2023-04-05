import { defineStore } from "pinia";
import type UserInfo from "@/interfaces/UserInfo";

export const useUserStore = defineStore("UserStore", {
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
