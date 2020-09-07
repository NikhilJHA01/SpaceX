<template>
  <div class="home">
    <!-- Filters for SpaceX -->
    <Filters />
    <!-- Display section Of SpaceX results -->
    <SpacexResults />
  </div>
</template>

<script>
// @ is an alias to /src
import Filters from "@/components/Filters";
import SpacexResults from "@/components/SpacexResults";

export default {
  name: "Home",
  components: {
    Filters,
    SpacexResults
  }
};
</script>

<style lang="scss">
.home {
  display: grid;
  grid-template-rows: auto;
  grid-template-areas:
    "filter"
    "spaceXCard";
  margin: 10px;
  grid-gap: 10px;
  place-items: center;

  @include LargerThanPhone() {
    grid-template-areas: "filter spaceXCard spaceXCard spaceXCard spaceXCard";
    place-items: normal;
    position: relative;
  }
}
</style>
