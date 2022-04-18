import React from 'react';
import PropTypes from 'prop-types';

const DropdownItems = ({ regions, setSelect }) => {
  return (
    <div className='dropdown-list'>
      {regions.map((region) => (
        <p
          className='dropdown-list-item'
          key={region}
          onClick={() => setSelect(region)}
        >
          {region}
        </p>
      ))}
    </div>
  );
};

DropdownItems.propTypes = {
  regions: PropTypes.array,
  setSelect: PropTypes.func,
};

DropdownItems.defaultProps = {
  regions: [],
  setSelect: null,
};

export default DropdownItems;
