import { shallowMount } from "@vue/test-utils";
import Footer from "@/components/Footer";

describe("Footer Component", () => {
  it("renders Footer when passed", () => {
    const msg = "Developed By Nikhil Jha";
    const wrapper = shallowMount(Footer);
    expect(wrapper.text()).toMatch(msg);
  });
});
