import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAll, filterByName } from '../../../store/actions';
import { FaSearch } from 'react-icons/fa';

const SearchBox = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    name === '' ? dispatch(getAll()) : dispatch(filterByName(name, 'home'));
  }, [name, dispatch]);

  return (
    <div className='search-container'>
      <FaSearch className='search-icon' />
      <input
        className='search-input'
        type='text'
        value={name}
        placeholder='Search for a country...'
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
