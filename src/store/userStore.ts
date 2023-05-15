import { defineStore } from "pinia";
import type UserInfo from "@/interfaces/UserInfo";

export const useUserStore = defineStore("userStore", {
  state: () => {
    return {
      user: {} as UserInfo,
      roomOwnerId: "",
    };
  },
  getters: {
    getUsername(): string | null {
      return this.user.email;
    },
    getShortEmail(): string {
      return this.user.email ? this.user.email.split("@")[0] : "undefined";
    },
    checkExistUser(): boolean {
      return this.user.id ? true : false;
    },
  },
  actions: {
    updateUser(user: UserInfo) {
      this.user = user;
    },
  },
});
