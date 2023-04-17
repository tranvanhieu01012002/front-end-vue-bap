import { AxiosResponse } from "axios";
import BaseRepository from "./BaseRepository";

export default class SetQuestionRepository extends BaseRepository {
  async getAll(): Promise<AxiosResponse> {
    this.setResource("set-question");
    return await this.get();
  }
}
