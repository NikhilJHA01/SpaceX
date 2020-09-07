<template>
  <div class="spacexResults" v-if="flights.length > 0">
    <SpaceCard
      v-for="flight in flights"
      :key="flight.flightNumber"
      :flight="flight"
    />
  </div>
  <div v-else-if="!loading && flights.length == 0" class="noData">
    No Flights Found &#128577;
  </div>
</template>

<script>
import SpaceCard from "./Card/SpaceCard";

export default {
  name: "SpacexResults",
  data() {
    return {
      loading: true
    };
  },
  components: {
    SpaceCard
  },

  mounted() {
    this.getSpacexResults();
  },
  computed: {
    flights() {
      return this.$store.state.filteredFlights
        ? this.$store.state.filteredFlights
        : [];
    }
  },
  methods: {
    getSpacexResults() {
      const loader = this.$loading({
        target: document.querySelector(".home"),
        lock: true,
        text: "Fetching Data...",
        spinner: "el-icon-loading",
        fullscreen: false,
        customClass: "loader",
        background: "#f9fbff6b"
      });
      this.$store.dispatch("getSpacexResults").finally(() => {
        loader.close();
        this.loading = false;
      });
    }
  }
};
</script>

<style lang="scss">
.spacexResults {
  grid-area: spaceXCard;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  place-items: center;
  align-self: flex-start;
  grid-gap: 10px;
  @include tablet() {
    grid-template-columns: repeat(2, 1fr);
  }
  @include dektop() {
    grid-template-columns: repeat(4, 1fr);
  }
  @include XtraLargeDektop() {
    grid-template-columns: repeat(4, 1fr);
  }
}
.noData {
  margin-top: 10px;
  margin-bottom: 30px;
  color: $secondary-blue;
  font-size: 14px;
  @include LargerThanPhone() {
    top: 50%;
    color: $secondary-blue;
    font-size: 25px;
    transform: translate(-50%, -50%);
    left: 60%;
    position: absolute;
  }
}
</style>
