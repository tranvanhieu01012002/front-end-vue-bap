import axios, { AxiosResponse } from "axios";
import BaseRepository from "./BaseRepository";

export default class RoomRepository extends BaseRepository {
  async openRoom(room: number): Promise<AxiosResponse> {
    this.setResource(`rooms/${room}`);
    return await this.get();
  }
  async createRoom(): Promise<AxiosResponse> {
    this.setResource(`rooms/create`);
    const token = localStorage.getItem("token");
    return await axios.get(this.setUpURL(), {
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
        "X-Socket-ID": window.Echo.socketId(),
      },
    });
  }
}
