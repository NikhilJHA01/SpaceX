import { shallowMount } from "@vue/test-utils";
import Header from "@/components/Header.vue";

describe("Header.vue", () => {
  it("renders heading when passed", () => {
    const msg = "SpaceX Launch Programs";
    const wrapper = shallowMount(Header);
    expect(wrapper.text()).toMatch(msg);
  });
});
