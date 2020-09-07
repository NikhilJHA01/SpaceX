<template>
  <el-checkbox-group
    v-model="landingSucessArray"
    size="small"
    text-color="#000000"
    fill="#5daf34"
    @change="changeFilter()"
  >
    <el-checkbox-button v-for="value in options" :label="value" :key="value">{{
      value
    }}</el-checkbox-button>
  </el-checkbox-group>
</template>

<script>
import { BooleanArray } from "../../utility/constant.js";

export default {
  name: "SuccessfullLanding",
  data() {
    return {
      landingSucessArray: [],
      options: BooleanArray
    };
  },
  methods: {
    changeFilter() {
      this.$store.dispatch(
        "Set_Filter_By_Landing_Success",
        this.landingSucessArray
      );
      this.$emit("changeFilter");
    }
  }
};
</script>
