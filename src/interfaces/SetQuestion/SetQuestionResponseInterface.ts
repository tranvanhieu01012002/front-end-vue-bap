import { SetQuestion } from "..";

export default interface SetQuestionResponse extends SetQuestion {
  isChecked?: boolean;
  updated_at: string;
}
