import { NEW_THEME } from '../actionTypes';

const theme =
  localStorage.getItem('theme') !== null
    ? localStorage.getItem('theme')
    : 'light';

const themeReducer = (state = { theme }, action) => {
  switch (action.type) {
    case NEW_THEME:
      return {
        ...state,
        theme:
          localStorage.getItem('theme') !== null
            ? localStorage.getItem('theme')
            : 'light',
      };
    default:
      return state;
  }
};

export default themeReducer;
