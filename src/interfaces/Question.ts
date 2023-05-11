import { AnswerInterface } from "./";

interface Question {
  id: string;
  content?: string;
  image?: string;
  answers: Array<AnswerInterface>;
}
export default Question;
