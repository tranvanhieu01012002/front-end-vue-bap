import SetQuestion from "./SetQuestionInterface";

export default interface SetQuestionPublish
  extends Omit<SetQuestion, "user_id"> {
  username: string;
}
