import React from 'react';
import IndividualCountryData from '../IndividualCountryData/IndividualCountryData';

const IndividualCountryContainer = ({ countryData }) => (
  <div className='country'>
    <img
      className='country-flag'
      src={countryData.flags.png}
      alt={`${countryData.name.common}'s flag`}
    />
    <IndividualCountryData countryData={countryData} />
  </div>
);

export default IndividualCountryContainer;
