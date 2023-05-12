import { defineComponent } from "vue";
import { RoomService } from "@/services";
export default defineComponent({
  data() {
    return {
      room: "",
      error: "",
    };
  },
  methods: {
    checkForm: function (): boolean {
      if (Number.isNaN(parseInt(this.room))) {
        this.error = "Please enter only number";
        return false;
      } else {
        return true;
      }
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    submit: async function (e: any) {
      e.preventDefault();
      if (this.checkForm()) {
        this.error = "";
        const roomService = new RoomService();
        await roomService.openRoom(this.room);
      } else {
        console.log(this.error);
      }
    },
  },
});
