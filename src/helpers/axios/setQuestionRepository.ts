import { AxiosResponse } from "axios";
import BaseRepository from "./BaseRepository";

export default class SetQuestionRepository extends BaseRepository {
  async getAll(): Promise<AxiosResponse> {
    return await this.get();
  }

  async updateNameSetQuestion(setQuestionId: string, newName: string) {
    this.setResource("set-questions");
    return await this.update(setQuestionId, { name: newName });
  }
}
