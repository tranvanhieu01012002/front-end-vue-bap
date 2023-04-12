import axios, { AxiosResponse } from "axios";
import BaseRepository from "./BaseRepository";

export default class QuestionRepository extends BaseRepository {
  async getQuestion(roomId: number): Promise<AxiosResponse> {
    this.setResource(`rooms/${roomId}/questions`);
    return await this.get();
  }

  async nextQuestion(roomId: unknown): Promise<AxiosResponse> {
    this.setResource(`rooms/${roomId}/next-question`);
    return axios.post(this.setUpURL(), {}, this.getConfigSocketId());
  }

  async pushAnswer(
    roomId: unknown,
    score: number,
    isCorrect: boolean
  ): Promise<AxiosResponse> {
    this.setResource(`rooms/${roomId}/questions/answers`);
    return await axios.post(
      this.setUpURL(),
      {
        is_correct: isCorrect,
        score,
      },
      this.getConfigSocketId()
    );
  }
}
