import { test, expect, describe } from "vitest";
import { printListNumber } from "../../helpers";
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
