import React from 'react';
import PropTypes from 'prop-types';

const CountryDataLeftColumn = ({ nativeName, region, subregion, capital }) => {
  return (
    <div className='left-column'>
      <p className='data-filed'>
        <span className='data-filed-heading'>Native Name: </span>
        {Object.values(nativeName)[0].official}
      </p>
      <p className='data-filed'>
        <span className='data-filed-heading'>Region: </span>
        {region}
      </p>
      <p className='data-filed'>
        <span className='data-filed-heading'>Sub-Region: </span>
        {subregion}
      </p>
      <p className='data-filed'>
        <span className='data-filed-heading'>Capital: </span>
        {capital?.map((capitalName, i, arr) => (
          <span key={capitalName}>
            {capitalName}
            {i !== arr.length - 1 ? ', ' : ''}
          </span>
        ))}
      </p>
    </div>
  );
};

CountryDataLeftColumn.propTypes = {
  nativeName: PropTypes.object,
  region: PropTypes.string,
  subregion: PropTypes.string,
  capital: PropTypes.array,
};

CountryDataLeftColumn.defaultProps = {
  nativeName: {},
  region: '',
  subregion: '',
  capital: [],
};

export default CountryDataLeftColumn;
