import { describe, test, expect } from "vitest";

describe("test import vue component", () => {
  test("test normal import", async () => {
    const navLink = await import("@/components/NavLink.vue");
    expect(navLink).toBeDefined();
  });
});
