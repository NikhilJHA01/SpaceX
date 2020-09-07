// const API="https://api.spaceXdata.com/v3/launches?limit=100";
// Mocking Json from the Above API

// Get All results from API
export const getSpacexResults = ({ commit }) => {
  return new Promise((resolve, reject) => {
    fetch("assets/flights.json")
      .then(res => res.json())
      .then(data => {
        commit("SET_FLIGHTS", data);
        resolve(data);
      })
      .catch(err => {
        reject(err);
      });
  });
};

// Get Filtered Results
export const Get_Filtered_Flights = ({ commit }) => {
  commit("Set_Filtered_Flights");
};

// Set FilterArray state
export const Set_Filter_By_LaunchYear = ({ commit }, params) => {
  commit("Set_Filter_By_LaunchYear", params);
};
export const Set_Filter_By_Launch_Success = ({ commit }, params) => {
  commit("Set_Filter_By_Launch_Success", params);
};
export const Set_Filter_By_Landing_Success = ({ commit }, params) => {
  commit("Set_Filter_By_Landing_Success", params);
};
