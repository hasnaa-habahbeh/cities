import {
  FETCH_COUNTRIES,
  FILTER_BY_NAME,
  FILTER_BY_REGION,
} from '../actionTypes';

const countriesReducer = (state = { countries: [], loading: true }, action) => {
  switch (action.type) {
    case FETCH_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        loading: false,
      };
    case FILTER_BY_NAME:
      return {
        ...state,
        countries: action.payload,
        loading: false,
      };
    case FILTER_BY_REGION:
      return {
        ...state,
        countries: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default countriesReducer;
