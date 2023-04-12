interface AnswerInterface {
  id?: number;
  character: string;
  bgColor: string;
  isCorrect?: boolean;
  content?: string;
  is_correct?: boolean;
  questionId?: number;
}

export default AnswerInterface;
