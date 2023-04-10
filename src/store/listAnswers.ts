import AnswerInterface from "@/interfaces/AnswerInterface";
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

export default listAnswers;
