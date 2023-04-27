import { describe, test, expect } from "vitest";

describe("test import vue component", () => {
  test("test normal import", async () => {
    const aboutView = await import("../../views/AboutView.vue");
    expect(aboutView).toBeDefined();
  });
});
