export default interface ParamFunction {
  //   (num: number): Promise<void>;
  (roomId: string | string[], currentQuestionId: number): void;
}
