import { defineStore } from "pinia";
import type UserInfo from "@/interfaces/UserInfo";

export const useUserStore = defineStore("userStore", {
  state: () => {
    return {
      user: {} as UserInfo,
      ownerRoom: sessionStorage.getItem("is_owner"),
      ownerRoomId: "",
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
    setRoomOwner(ownerRoomId: string) {
      this.ownerRoom = "true";
      sessionStorage.setItem("is_owner", "true");
      this.ownerRoomId = ownerRoomId;
    },
  },
});
