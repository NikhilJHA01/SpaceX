import { mount } from "@vue/test-utils";
import SuccessfullLanding from "@/components/Filters/SuccessfullLanding";

describe("SuccessfullLanding Component", () => {
  const wrapper = mount(SuccessfullLanding, {
    data() {
      return {
        landingSucessArray: [],
        options: ["TRUE", "FALSE"]
      };
    }
  });
  it("renders the SuccessfullLanding", async () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("has a checkbox-group", () => {
    const checkbox_group = wrapper.find("el-checkbox-group");
    expect(checkbox_group.exists()).toBe(true);
  });

  it("Filter is not selected by default", () => {
    expect(wrapper.vm.$data.landingSucessArray).toHaveLength(0);
  });
});
