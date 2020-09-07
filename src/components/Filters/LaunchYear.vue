<template>
  <el-checkbox-group
    v-model="launchYearArray"
    size="small"
    text-color="#000000"
    fill="#5daf34"
    @change="changeFilter()"
  >
    <el-checkbox-button v-for="year in years" :label="year" :key="year">{{
      year
    }}</el-checkbox-button>
  </el-checkbox-group>
</template>

<script>
import { LaunchYears } from "../../utility/constant.js";

export default {
  name: "LaunchYear",
  data() {
    return {
      launchYearArray: [],
      years: LaunchYears
    };
  },
  methods: {
    // Emit event on change of filters
    changeFilter() {
      this.$store.dispatch("Set_Filter_By_LaunchYear", this.launchYearArray);
      this.$emit("changeFilter");
    }
  }
};
</script>
