<template>
  <div class="filters">
    <h1>Filters</h1>
    <section class="filter__launchYear">
      <h2>Launch Year</h2>
      <LaunchYear @changeFilter="showFilteredResult()" />
    </section>
    <section class="filter__successfullLaunch">
      <h2>Successfull Launch</h2>
      <SuccessfullLaunch @changeFilter="showFilteredResult()" />
    </section>
    <section class="filter__successfullLanding">
      <h2>Succesfull Landing</h2>
      <SuccessfullLanding @changeFilter="showFilteredResult()" />
    </section>
  </div>
</template>

<script>
import LaunchYear from "./Filters/LaunchYear";
import SuccessfullLanding from "./Filters/SuccessfullLanding";
import SuccessfullLaunch from "./Filters/SuccessfullLaunch";

export default {
  name: "Filters",
  components: {
    LaunchYear,
    SuccessfullLanding,
    SuccessfullLaunch
  },
  methods: {
    showFilteredResult() {
      this.$store.dispatch("Get_Filtered_Flights");
    }
  }
};
</script>

<style lang="scss">
.filters {
  grid-area: filter;
  min-width: 190px;
  max-width: 210px;
  padding: 10px;
  padding-bottom: 20px;
  background-color: $primary-white;
  align-self: flex-start;
  h1 {
    font-size: 24px;
    display: flex;
    justify-content: flex-start;
  }
  h2 {
    border-bottom: 1px solid $secondary-black;
    padding-bottom: 5px;
    font-size: 16px;
  }
}
</style>
