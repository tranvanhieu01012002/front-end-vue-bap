import axios, { AxiosResponse } from "axios";
import BaseRepository from "./BaseRepository";

export default class QuestionRepository extends BaseRepository {
  async getQuestion(roomId: number): Promise<AxiosResponse> {
    this.setResource(`rooms/${roomId}/questions`);
    return await this.get();
  }
  async nextQuestion(roomId: any): Promise<AxiosResponse> {
    this.setResource(`rooms/${roomId}/next-question`);
    const token = localStorage.getItem("token");
    return await this.post(
      {},
      {
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
          "X-Socket-ID": window.Echo.socketId(),
        },
      }
    );
  }
}
