import AnswerInterface from "./AnswerInterface";

interface Question {
  id: string;
  content?: string;
  image?: string;
  answer: AnswerInterface[];
}
export default Question;
