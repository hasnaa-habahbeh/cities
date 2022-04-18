import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CountryCard = ({ country }) => (
  <Link className='country-card' to={`/countries/${country.name.common}`}>
    <img
      className='country-card-flag'
      src={country.flags.png}
      alt={`${country.name.common}'s flag`}
    />
    <h3 className='country-card-country-name'>{country.name.common}</h3>
    <p className='country-card-field'>
      <span className='country-card-field-heading'>Population: </span>
      {country.population.toLocaleString('en-US')}
    </p>
    <p className='country-card-field'>
      <span className='country-card-field-heading'>Region: </span>
      {country.region}
    </p>
    <p className='country-card-field'>
      <span className='country-card-field-heading'>Capital: </span>
      {country.capital}
    </p>
  </Link>
);

CountryCard.propTypes = {
  country: PropTypes.object,
};

CountryCard.defaultProps = {
  country: {},
};

export default CountryCard;
