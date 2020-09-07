import { mount } from "@vue/test-utils";
import LaunchYear from "@/components/Filters/LaunchYear";
import { LaunchYears } from "./data/flightTestData";

describe("Layout Years Component", () => {
  const wrapper = mount(LaunchYear, {
    data() {
      return {
        launchYearArray: [],
        years: LaunchYears
      };
    }
  });

  it("renders the Layout Year", async () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("has a checkbox-group", () => {
    const checkbox_group = wrapper.find("el-checkbox-group");
    expect(checkbox_group.exists()).toBe(true);
  });

  it("Filter is not selected by default", () => {
    expect(wrapper.vm.$data.launchYearArray).toHaveLength(0);
  });
});
