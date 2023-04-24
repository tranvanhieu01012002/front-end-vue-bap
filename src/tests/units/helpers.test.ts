import { test, expect, describe } from "vitest";
import { printListNumber, findIndexFromId } from "../../helpers";
import { Question } from "@/interfaces";

describe("import vue components", () => {
  test("normal imports as expected", async () => {
    const result = await import("../../components/SlotLearn.vue");
    expect(result).toBeDefined();
  });
});

describe("print array number ", () => {
  test("test print array as string", () => {
    const result = printListNumber([1, 2, 4, 109]);
    expect(result).toEqual("2, 3, 5, 110 ");
  });

  test("test wrong print array as string", () => {
    const result = printListNumber([1, 2, 4, 109]);
    expect(result).not.toEqual("1, 2, 4, 109");
  });
});

describe("find index of a question in a question array", () => {
  const questions: Array<Question> = [
    {
      id: "1",
      content: "Fsdfsdf",
      answers: [
        {
          id: 2,
          content: "Fsdfs",
          is_correct: false,
          character: "A",
          bgColor: "Fdsfs",
        },
        {
          id: 2,
          content: "Fsdfs",
          is_correct: false,
          character: "A",
          bgColor: "Fdsfs",
        },
        {
          id: 2,
          content: "Fsdfs",
          is_correct: false,
          character: "A",
          bgColor: "Fdsfs",
        },
        {
          id: 2,
          content: "Fsdfs",
          is_correct: false,
          character: "A",
          bgColor: "Fdsfs",
        },
      ],
    },
    {
      id: "2",
      content: "Fsdfsdf",
      answers: [
        {
          id: 2,
          content: "Fsdfs",
          is_correct: false,
          character: "A",
          bgColor: "Fdsfs",
        },
        {
          id: 2,
          content: "Fsdfs",
          is_correct: false,
          character: "A",
          bgColor: "Fdsfs",
        },
        {
          id: 2,
          content: "Fsdfs",
          is_correct: false,
          character: "A",
          bgColor: "Fdsfs",
        },
        {
          id: 2,
          content: "Fsdfs",
          is_correct: false,
          character: "A",
          bgColor: "Fdsfs",
        },
      ],
    },
    {
      id: "3",
      content: "Fsdfsdf",
      answers: [
        {
          id: 2,
          content: "Fsdfs",
          is_correct: false,
          character: "A",
          bgColor: "Fdsfs",
        },
        {
          id: 2,
          content: "Fsdfs",
          is_correct: false,
          character: "A",
          bgColor: "Fdsfs",
        },
        {
          id: 2,
          content: "Fsdfs",
          is_correct: false,
          character: "A",
          bgColor: "Fdsfs",
        },
        {
          id: 2,
          content: "Fsdfs",
          is_correct: false,
          character: "A",
          bgColor: "Fdsfs",
        },
      ],
    },
    {
      id: "4",
      content: "Fsdfsdf",
      answers: [
        {
          id: 2,
          content: "Fsdfs",
          is_correct: false,
          character: "A",
          bgColor: "Fdsfs",
        },
        {
          id: 2,
          content: "Fsdfs",
          is_correct: false,
          character: "A",
          bgColor: "Fdsfs",
        },
        {
          id: 2,
          content: "Fsdfs",
          is_correct: false,
          character: "A",
          bgColor: "Fdsfs",
        },
        {
          id: 2,
          content: "Fsdfs",
          is_correct: false,
          character: "A",
          bgColor: "Fdsfs",
        },
      ],
    },
  ];
  test("test correct case", () => {
    expect(findIndexFromId("2", questions)).toEqual(1);
  });

  test("test wrong case", () => {
    expect(findIndexFromId("323", questions)).not.toEqual(1);
  });
});
