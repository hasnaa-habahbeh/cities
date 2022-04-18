import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getAll } from '../../store/actions';
import ToggleMode from '../ToggleMode/ToggleMode';

const Header = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const refreshHome = () =>
    location.pathname === '/' ? dispatch(getAll()) : null;

  return (
    <div className='header space-from-edges'>
      <Link className='main-heading-anchor' to='/' onClick={refreshHome}>
        <h1 className='main-heading-text'>Where in the world?</h1>
      </Link>
      <ToggleMode />
    </div>
  );
};

export default Header;
