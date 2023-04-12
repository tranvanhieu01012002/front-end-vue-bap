import RoomRepository from "@/helpers/axios/RoomRepository";
import axios from "axios";
import { router } from "@/router";
import RoomOwnerService from "./roomOwnerService";

export default class RoomService {
  private roomRepository: RoomRepository;
  private roomOwnerService;
  constructor() {
    this.roomRepository = new RoomRepository();
    this.roomOwnerService = new RoomOwnerService();
  }

  async createRoom(): Promise<void> {
    const { data } = await this.roomRepository.createRoom();
    console.log(data);
    this.roomOwnerService.setRoomOwner(data.user_id);
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
      if (data.is_owner) {
        this.roomOwnerService.setRoomOwner(data.user_id);
      } else {
        this.roomOwnerService.setRoomOwnerId(data.user_id);
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
