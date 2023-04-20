import { Question } from "@/interfaces";

function findIndexFromId(
  id: string | number | string[],
  array: Array<Question>
): number {
  const question = array.find((item) => item.id.toString() === id);
  return array.indexOf(question ?? array[0]);
}

export { findIndexFromId };
