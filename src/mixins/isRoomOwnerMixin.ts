import { defineComponent } from "vue";
import { RoomOwnerService } from "@/services";
export default defineComponent({
  computed: {
    isRoomOwner() {
      return new RoomOwnerService().checkRoomOwner();
    },
  },
});
