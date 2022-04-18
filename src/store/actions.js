import {
  FETCH_COUNTRIES,
  FILTER_BY_NAME,
  FILTER_BY_REGION,
  GET_COUNTRY,
  NEW_THEME,
} from './actionTypes';

export const getAll = () => (dispatch) => {
  fetch('https://restcountries.com/v3.1/all')
    .then((response) => response.json())
    .then((data) =>
      dispatch({
        type: FETCH_COUNTRIES,
        payload: data,
      })
    )
    .catch((error) => console.error(error));
};

export const filterByName = (name, page) => (dispatch) => {
  fetch(`https://restcountries.com/v3.1/name/${name.toLowerCase()}`)
    .then((response) => response.json())
    .then((data) =>
      page === 'individual'
        ? dispatch({
            type: GET_COUNTRY,
            payload: data[0],
          })
        : dispatch({
            type: FILTER_BY_NAME,
            payload: data,
          })
    )
    .catch((error) => console.error(error));
};

export const filterByRegion = (region) => (dispatch) => {
  fetch(`https://restcountries.com/v3.1/region/${region}`)
    .then((response) => response.json())
    .then((data) =>
      dispatch({
        type: FILTER_BY_REGION,
        payload: data,
      })
    )
    .catch((error) => console.error(error));
};

export const toggleMode = (currentTheme) => (dispatch) => {
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  document.body?.classList.remove(`${currentTheme}`);
  document.body.classList.add(`${newTheme}`);
  localStorage.setItem('theme', newTheme);
  dispatch({
    type: NEW_THEME,
  });
};
