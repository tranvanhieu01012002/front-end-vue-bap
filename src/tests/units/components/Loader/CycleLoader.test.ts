import { mount } from "@vue/test-utils";
import { test, expect, describe } from "vitest";
import CycleLoader from "../../../../components/Loader/CycleLoader.vue";

describe("Test render Loader", () => {
  test("render content", () => {
    const wrapper = mount(CycleLoader);
    expect(wrapper.text()).toContain("Loading for user");
  });
});
