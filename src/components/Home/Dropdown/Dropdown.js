import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { filterByRegion } from '../../../store/actions';
import { FaAngleDown } from 'react-icons/fa';
import DropdownItems from '../DropdownItems/DropdownItems';

const regions = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];

const Dropdown = () => {
  const [select, setSelect] = useState('');
  const [expandDropDown, setExpandDropDown] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (select !== '') dispatch(filterByRegion(select));
  }, [select, dispatch]);

  return (
    <div
      className='dropdown'
      tabIndex={0}
      onClick={() => setExpandDropDown(!expandDropDown)}
      onBlur={() => setExpandDropDown(false)}
    >
      <div className='dropdown-label'>
        <span className='dropdown-label-text'>
          {select === '' ? 'Filter By Region' : select}
        </span>
        <FaAngleDown className='dropdown-label-icon' />
      </div>
      {expandDropDown && (
        <DropdownItems regions={regions} setSelect={setSelect} />
      )}
    </div>
  );
};

export default Dropdown;
