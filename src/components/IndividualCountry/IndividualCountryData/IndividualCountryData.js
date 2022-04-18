import React from 'react';
import PropTypes from 'prop-types';
import CountryDataLeftColumn from '../CountryDataLeftColumn/CountryDataLeftColumn';
import CountryDataRightColumn from '../CountryDataRightColumn/CountryDataRightColumn';
import BorderCountries from '../BorderCountries/BorderCountries';

const IndividualCountryData = ({ countryData }) => (
  <div className='country-data'>
    <h2 className='country-data-name'>{countryData.name.common}</h2>
    <div className='country-data-items'>
      <CountryDataLeftColumn
        nativeName={countryData.name.nativeName}
        region={countryData.region}
        subregion={countryData.subregion}
        capital={countryData.capital}
      />
      <CountryDataRightColumn
        population={countryData.population}
        tld={countryData.tld}
        currencies={countryData.currencies}
        languages={countryData.languages}
      />
    </div>
    {countryData.borders && (
      <BorderCountries borderCountries={countryData.borders} />
    )}
  </div>
);

IndividualCountryData.propTypes = {
  countryData: PropTypes.object,
};

IndividualCountryData.defaultProps = {
  countryData: {},
};

export default IndividualCountryData;
