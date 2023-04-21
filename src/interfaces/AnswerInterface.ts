interface AnswerInterface {
  id?: number;
  character: string;
  bgColor: string;
  isCorrect?: boolean;
  content?: string;
  is_correct?: boolean;
  questionId?: number;
  question_id?: number;
}

export default AnswerInterface;
