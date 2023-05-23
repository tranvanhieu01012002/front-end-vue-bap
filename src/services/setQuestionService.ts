import SetQuestionRepository from "@/helpers/axios/setQuestionRepository";

export default class SetQuestionService {
  public async forkSetQuestion(id: number) {
    const setQuestionRepo = new SetQuestionRepository();
    return await setQuestionRepo.forkSetQuestion(id);
  }
}
