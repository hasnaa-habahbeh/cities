import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BorderCountries = ({ borderCountries }) => (
  <p className='data-filed border-countries'>
    <span className='data-filed-heading'>Border Countries: </span>
    {borderCountries.map((borderCountry, i) => (
      <Link
        className='border-country-button'
        key={`border-country-no-${i}`}
        to={`/countries/${borderCountry}`}
      >
        {borderCountry}
      </Link>
    ))}
  </p>
);

BorderCountries.propTypes = {
  borderCountries: PropTypes.array,
};

BorderCountries.defaultProps = {
  borderCountries: [],
};

export default BorderCountries;
