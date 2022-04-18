import React from 'react';
import PropTypes from 'prop-types';

const CountryDataRightColumn = ({ population, tld, currencies, languages }) => {
  return (
    <div className='right-column'>
      <p className='data-filed'>
        <span className='data-filed-heading'>Population: </span>
        {population.toLocaleString('en-US')}
      </p>
      <p className='data-filed'>
        <span className='data-filed-heading'>Top Level Domain: </span>
        {tld[0]}
      </p>
      <p className='data-filed'>
        <span className='data-filed-heading'>Currencies: </span>
        {Object.keys(currencies)?.map((currency, i, arr) => (
          <span key={`currency-no-${i}`}>
            {currency}
            {i !== arr.length - 1 ? ', ' : ''}
          </span>
        ))}
      </p>
      <p className='data-filed'>
        <span className='data-filed-heading'>Languages: </span>
        {Object.keys(languages)?.map((language, i, arr) => (
          <span key={`language-no-${i}`}>
            {language.toLocaleUpperCase()}
            {i !== arr.length - 1 ? ', ' : ''}
          </span>
        ))}
      </p>
    </div>
  );
};

CountryDataRightColumn.propTypes = {
  population: PropTypes.number,
  tld: PropTypes.array,
  currencies: PropTypes.object,
  languages: PropTypes.object,
};

CountryDataRightColumn.defaultProps = {
  population: 0,
  tld: [],
  currencies: {},
  languages: {},
};

export default CountryDataRightColumn;
