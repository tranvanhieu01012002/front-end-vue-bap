import { AxiosResponse } from "axios";
import BaseRepository from "./BaseRepository";
import { SetQuestion } from "@/interfaces";

export default class SetQuestionRepository extends BaseRepository {
  async getAll(): Promise<AxiosResponse> {
    return await this.get();
  }

  async updateSetQuestion(setQuestionId: string, setQuestion: SetQuestion) {
    this.setResource("set-questions");
    return await this.update(setQuestionId, setQuestion);
  }
  async search(searchText: string): Promise<AxiosResponse> {
    this.setResource(`set-questions/s=${searchText}`);
    return await this.get();
  }
}
