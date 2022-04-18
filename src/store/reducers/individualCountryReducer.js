import { GET_COUNTRY } from '../actionTypes';

const individualCountryReducer = (state = { countryData: {} }, action) => {
  switch (action.type) {
    case GET_COUNTRY:
      return {
        ...state,
        countryData: action.payload,
      };
    default:
      return state;
  }
};

export default individualCountryReducer;
