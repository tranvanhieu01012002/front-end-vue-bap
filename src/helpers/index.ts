import { Question } from "@/interfaces";

function findIndexFromId(
  id: string | number | string[],
  array: Array<Question>
): number {
  const question = array.find((item) => item.id.toString() === id);
  return array.indexOf(question ?? array[0]);
}
function printListNumber(list: number[]): string {
  let listNumberString = "";
  list.map((item, index) =>
    list.length - 1 === index
      ? (listNumberString += `${item + 1} `)
      : (listNumberString += `${item + 1}, `)
  );
  return listNumberString;
}
export { findIndexFromId, printListNumber };
