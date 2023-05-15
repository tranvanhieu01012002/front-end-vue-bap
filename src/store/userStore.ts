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
      // return this.user.email.split("@")[0] ?? "undefined";
      console.log(this.user.email);
      return (
        "hieu.tran23@student.passerellesnumeriques.org".split("@")[0] ??
        "undefined"
      );
    },
  },
  actions: {
    updateUser(user: UserInfo) {
      this.user = user;
    },
  },
});
