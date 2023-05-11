import CoreAnswerInterface from "./CoreAnswerInterface";

interface AnswerWithShapeInterface
  extends Omit<CoreAnswerInterface, "bgColor"> {
  shape: string;
  bgColor?: string;
}

export default AnswerWithShapeInterface;
