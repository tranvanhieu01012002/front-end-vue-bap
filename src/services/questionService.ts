/* eslint-disable @typescript-eslint/no-explicit-any */
import QuestionRepository from "@/helpers/axios/QuestionRepository";
import { router } from "@/router";
import RoomOwnerService from "./roomOwnerService";
import Question from "@/interfaces/Question";

export default class QuestionService {
  private questionRepository: QuestionRepository;

  constructor() {
    this.questionRepository = new QuestionRepository();
  }

  async nextQuestion(
    roomId: string | string[],
    currentQuestionId: number
  ): Promise<void> {
    if (new RoomOwnerService().checkRoomOwner()) {
      await this.nextQuestionRoomOwner(roomId);
    }
    this.nextQuestionRedirect(roomId, currentQuestionId);
  }

  async nextQuestionRoomOwner(roomId: unknown): Promise<void> {
    const { data } = await this.questionRepository.nextQuestion(roomId);
    console.log(data);
  }

  nextQuestionRedirect(roomId: string | string[], currentQuestionId: number) {
    router.push({
      name: "room-question",
      params: { id: roomId, questionId: currentQuestionId },
    });
  }

  async getQuestion(): Promise<Array<Question>> {
    const { data } = await this.questionRepository.getQuestion(1);
    return data.data;
  }

  async answerQuestion(
    roomId: unknown,
    time: number,
    isCorrect: boolean
  ): Promise<void> {
    const { data } = await this.questionRepository.pushAnswer(
      roomId,
      time,
      isCorrect
    );
    console.log(data);
  }

  async viewResult(roomId: unknown): Promise<any> {
    const { data } = await this.questionRepository.viewResult(roomId);
    return data.data;
  }
}
