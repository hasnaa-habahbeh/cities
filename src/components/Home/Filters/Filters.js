import React from 'react';
import SearchBox from '../SearchBox/SearchBox';
import Dropdown from '../Dropdown/Dropdown';

const Filters = () => {
  return (
    <div className='filtering-container space-from-edges'>
      <SearchBox />
      <Dropdown />
    </div>
  );
};

export default Filters;
