import { defineStore } from "pinia";
export const useAuthStore = defineStore("authStore", {
  state: () => ({ isLogin: false }),
  getters: {},
  actions: {
    setIsLogin(status: boolean) {
      console.log("update auth status");
      this.isLogin = status;
    },
  },
});
