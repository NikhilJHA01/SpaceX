// Set All flights from the API / Mock Json
export const SET_FLIGHTS = (state, flights) => {
  let flightArray = [];
  if (flights) {
    for (let flight of flights) {
      const object = {
        missionName: flight["mission_name"] ? flight["mission_name"] : "",
        missionId: flight["mission_id"] ? flight["mission_id"] : [],
        flightNumber: flight["flight_number"] ? flight["flight_number"] : "",
        landingSuccess:
          flight["rocket"] &&
          flight["rocket"]["first_stage"] &&
          flight["rocket"]["first_stage"]["cores"] &&
          flight["rocket"]["first_stage"]["cores"][0]["land_success"]
            ? flight["rocket"]["first_stage"]["cores"][0]["land_success"]
            : false,
        launchSuccess: flight["launch_success"]
          ? flight["launch_success"]
          : false,
        launchYear: flight["launch_year"] ? flight["launch_year"] : "",
        flightImageLarge: flight["links"]["mission_patch"]
          ? flight["links"]["mission_patch"]
          : "",
        flightImageSmall: flight["links"]["mission_patch_small"]
          ? flight["links"]["mission_patch_small"]
          : ""
      };
      flightArray.push(object);
    }
    state.flights = flightArray;
    state.filteredFlights = flightArray;
  }
};

// Filter Result on basis of filters selected by user
export const Set_Filtered_Flights = state => {
  state.filteredFlights = state.flights.filter(flight =>
    state.filterArray["launchYear"].length > 0
      ? state.filterArray["launchYear"].includes(flight.launchYear)
      : true
  );
  state.filteredFlights = state.filteredFlights.filter(flight =>
    state.filterArray["launchSuccess"].length == 1
      ? state.filterArray["launchSuccess"].includes(
          flight.launchSuccess.toString().toUpperCase()
        )
      : true
  );
  state.filteredFlights = state.filteredFlights.filter(flight =>
    state.filterArray["landingSuccess"].length == 1
      ? state.filterArray["landingSuccess"].includes(
          flight.landingSuccess.toString().toUpperCase()
        )
      : true
  );
};

// Set Filter in filterArray  state
export const Set_Filter_By_LaunchYear = (state, filterQueryArray) => {
  state.filterArray["launchYear"] = filterQueryArray;
};
export const Set_Filter_By_Launch_Success = (state, filterQueryArray) => {
  state.filterArray["launchSuccess"] = filterQueryArray;
};
export const Set_Filter_By_Landing_Success = (state, filterQueryArray) => {
  state.filterArray["landingSuccess"] = filterQueryArray;
};
