import { AxiosResponse } from "axios";
import BaseRepository from "./BaseRepository";

export default class RoomRepository extends BaseRepository {
  async openRoom(room: number): Promise<AxiosResponse> {
    this.setResource(`rooms/${room}`);
    return await this.get();
  }
  async createRoom(): Promise<AxiosResponse> {
    this.setResource(`rooms/create`);
    return await this.get();
  }
}
