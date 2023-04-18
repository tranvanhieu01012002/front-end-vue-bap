import { AxiosResponse } from "axios";
import BaseRepository from "./BaseRepository";

export default class SetQuestionRepository extends BaseRepository {
  async getAll(): Promise<AxiosResponse> {
    return await this.get();
  }
}
