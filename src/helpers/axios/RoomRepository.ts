import axios, { AxiosResponse } from "axios";
import BaseRepository from "./BaseRepository";

export default class RoomRepository extends BaseRepository {
  async openRoom(room: number): Promise<AxiosResponse> {
    this.setResource(`rooms/${room}`);
    return await this.get();
  }
  async createRoom(setQuestionId: number): Promise<AxiosResponse> {
    this.setResource(`rooms/create`);
    const token = localStorage.getItem("token");
    return await axios.post(
      this.setUpURL(),
      { set_question_id: setQuestionId },
      {
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
          "X-Socket-ID": window.Echo.socketId(),
        },
      }
    );
  }
}
