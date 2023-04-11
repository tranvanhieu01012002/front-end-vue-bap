import RoomRepository from "@/helpers/axios/RoomRepository";
import { router } from "@/router";
import { useUserStore } from "@/store";
import axios from "axios";

export default class RoomService {
  private roomRepository: RoomRepository;
  private userStore;

  constructor() {
    this.roomRepository = new RoomRepository();
    this.userStore = useUserStore();
  }

  async createRoom(): Promise<void> {
    const { data } = await this.roomRepository.createRoom();
    router.push({
      name: "room",
      params: {
        id: data.room,
      },
    });
  }

  async openRoom(roomId: string): Promise<void> {
    try {
      const { data } = await this.roomRepository.openRoom(parseInt(roomId));
      if (!data.is_owner) {
        this.userStore.ownerRoomId = data.user_id;
        console.log(data.user_id);
      }
      router.push({
        name: "room",
        params: {
          id: data.data,
        },
      });
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        alert(error.response?.data.data);
        throw error;
      } else {
        throw new Error("different error than axios");
      }
    }
  }
}
