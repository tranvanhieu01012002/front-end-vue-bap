import { AnswerWithShapeInterface, AnswerInterface } from "@/interfaces";
const prefixCss = "alert alert-";

const listAnswers: AnswerInterface[] = [
  {
    character: "A",
    bgColor: prefixCss + "primary",
  },
  {
    character: "B",
    bgColor: prefixCss + "secondary",
  },
  {
    character: "C",
    bgColor: prefixCss + "warning",
  },
  {
    character: "D",
    bgColor: prefixCss + "dark",
  },
];

const listAnswersWithShape: AnswerWithShapeInterface[] = [
  {
    shape: "shape-rectangle",
  },
  {
    shape: "shape-square",
  },
  {
    shape: "shape-diamond",
  },
  {
    shape: "shape-cycle",
  },
];
export { listAnswers, listAnswersWithShape };
