/* eslint-disable @typescript-eslint/no-explicit-any */
import QuestionRepository from "@/helpers/axios/QuestionRepository";
import { router } from "@/router";
import RoomOwnerService from "./roomOwnerService";
import Question from "@/interfaces/Question";
import { AnswerInterface } from "@/interfaces";

export default class QuestionService {
  private questionRepository: QuestionRepository;

  constructor() {
    this.questionRepository = new QuestionRepository();
  }

  async nextQuestion(roomId: string | string[]): Promise<void> {
    if (new RoomOwnerService().checkRoomOwner()) {
      await this.nextQuestionRoomOwner(roomId);
    }
  }

  async nextQuestionRoomOwner(roomId: unknown): Promise<void> {
    const { data } = await this.questionRepository.nextQuestion(roomId);
    console.log(data);
  }

  nextQuestionRedirect(
    roomId: string | string[],
    questionId: string | string[]
  ) {
    router.push({
      name: "room-question",
      params: { id: roomId, questionId },
    });
  }

  redirectRouteLoading(
    roomId: string | string[],
    questionId: string | string[]
  ) {
    return router.push({
      name: "room-question-loading",
      params: { roomId, questionId },
    });
  }

  showResultRedirect(roomId: string | string[], questionId: string | string[]) {
    return router.push({
      name: "room-question-result",
      params: { roomId, questionId },
    });
  }

  async getQuestion(setQuestionId: number): Promise<Array<Question>> {
    const { data } = await this.questionRepository.getQuestion(setQuestionId);
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

  async updateQuestion(
    questions: Array<Question>,
    setQuestionId: string | string[]
  ) {
    const { data } = await this.questionRepository.updateQuestion(
      questions,
      setQuestionId
    );
    return data.data;
  }

  checkEmptyQuestion(questions: Array<Question>): number[] {
    const emptyQuestionIds: number[] = [];
    questions.map((item, index) => {
      if (item.content == "" || item.content === undefined)
        emptyQuestionIds.push(index);
    });
    return emptyQuestionIds;
  }
  // checkEmptyAnswer(answers: Array<AnswerInterface>) {

  // }
}
