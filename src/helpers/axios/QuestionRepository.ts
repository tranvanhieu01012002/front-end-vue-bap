import axios, { AxiosResponse } from "axios";
import BaseRepository from "./BaseRepository";

export default class QuestionRepository extends BaseRepository {
  async getQuestion(roomId: number): Promise<AxiosResponse> {
    this.setResource(`rooms/${roomId}/questions`);
    return await this.get();
  }
  async nextQuestion(roomId: any): Promise<AxiosResponse> {
    this.setResource(`rooms/${roomId}/next-question`);
    console.log(this.getConfigSocketId());
    return axios.post(this.setUpURL(), {}, this.getConfigSocketId());
  }
}
