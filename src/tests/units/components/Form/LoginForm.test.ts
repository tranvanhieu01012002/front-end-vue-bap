import { shallowMount } from "@vue/test-utils";
import { test, expect, describe } from "vitest";
import LoginForm from "../../../../components/Form/LoginForm.vue";

describe("Test render Loader", () => {
  test("render content", () => {
    const wrapper = shallowMount(LoginForm);
    expect(wrapper.text()).toContain("Your password");
  });
});
