import { computed } from "vue";
import { RoomOwnerService } from "@/services";
export const useRoomOwner = () => {
  const isRoomOwner = computed(() => new RoomOwnerService().checkRoomOwner());
  return { isRoomOwner };
};
