import { useUserStore } from "@/store";
import { storeToRefs } from "pinia";

export const useGetUserInfo = () => {
  const { getUsername } = storeToRefs(useUserStore());
  return { getUsername };
};
