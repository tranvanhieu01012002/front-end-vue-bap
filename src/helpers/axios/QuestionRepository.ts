import { AxiosResponse } from "axios";
import BaseRepository from "./BaseRepository";

export default class QuestionRepository extends BaseRepository {
  async getQuestion(roomId: number): Promise<AxiosResponse> {
    this.setResource(`rooms/${roomId}/questions`);
    return await this.get();
  }
}
