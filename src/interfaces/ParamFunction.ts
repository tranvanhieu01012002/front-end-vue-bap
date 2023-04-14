export default interface ParamFunction {
  //   (num: number): Promise<void>;
  (roomId: string | string[], questionId: string | string[]): void;
}
