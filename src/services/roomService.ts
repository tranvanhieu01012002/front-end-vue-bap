import RoomRepository from "@/helpers/axios/RoomRepository";
import { AxiosResponse } from "axios";
import { router } from "@/router";

export default class RoomService {
  private roomRepository: RoomRepository;
  constructor() {
    this.roomRepository = new RoomRepository();
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
  // public static getRoomId(): number {
  //   return this.roomId;
  // }
  // public static setRoomId(roomId: number) {
  //   this.roomId = roomId;
  // }
}
