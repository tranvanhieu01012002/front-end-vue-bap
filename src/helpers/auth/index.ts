import { useUserStore } from "@/store";
import UserRepository from "../axios/UserRepository";
export default class Auth {
  async checkLogin() {
    const userStore = useUserStore();
    if (!userStore.checkExistUser) {
      const user = new UserRepository();
      try {
        const { data } = await user.profile();
        userStore.updateUser(data);
      } catch (error) {
        return false;
      }
    }
    return true;
  }
}
