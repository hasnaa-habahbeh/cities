import { combineReducers } from 'redux';
import countriesReducer from './reducers/countriesReducer';
import individualCountryReducer from './reducers/individualCountryReducer';
import themeReducer from './reducers/themeReducer';

const allReducers = combineReducers({
  countriesArray: countriesReducer,
  individualCountryObject: individualCountryReducer,
  theme: themeReducer,
});

export default allReducers;
