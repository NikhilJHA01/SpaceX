import { shallowMount } from "@vue/test-utils";
import SuccessfullLaunch from "@/components/Filters/SuccessfullLaunch";

describe("SuccessfullLaunch Component", () => {
  const wrapper = shallowMount(SuccessfullLaunch);

  it("renders the SuccessfullLaunch", async () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("has a checkbox-group", () => {
    const form = wrapper.find("el-checkbox-group");
    expect(form.exists()).toBe(true);
  });

  it("Filter is not selected by default", () => {
    expect(wrapper.vm.$data.launchSucessArray).toHaveLength(0);
  });
});
