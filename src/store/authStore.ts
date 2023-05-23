import { defineStore } from "pinia";
import { ref } from "vue";
export const useAuthStore = defineStore("authStore", () => {
  const isLogin = ref(false);
  const setIsLogin = (status: boolean) => {
    isLogin.value = status;
  };
  return { isLogin, setIsLogin };
});
