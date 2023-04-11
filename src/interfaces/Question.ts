import AnswerInterface from "./AnswerInterface";

interface Question {
  id: string;
  content?: string;
  image?: string;
  answers: Array<AnswerInterface>;
}
export default Question;
