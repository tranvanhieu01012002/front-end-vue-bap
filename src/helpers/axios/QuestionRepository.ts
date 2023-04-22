import axios, { AxiosResponse } from "axios";
import BaseRepository from "./BaseRepository";
import { Question } from "@/interfaces";

export default class QuestionRepository extends BaseRepository {
  async getQuestion(setQuestion: number): Promise<AxiosResponse> {
    this.setResource(`set-questions/${setQuestion}/questions`);
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

  async viewResult(roomId: unknown): Promise<AxiosResponse> {
    this.setResource(`rooms/${roomId}/questions/view-result`);
    return await axios.get(this.setUpURL(), this.getConfigSocketId());
  }

  async updateQuestion(
    questions: Array<Question>,
    setQuestionId: string | string[]
  ) {
    const data = { questions, set_question_id: setQuestionId };
    this.setResource(`questions`);
    return await this.update("", data);
  }
}
