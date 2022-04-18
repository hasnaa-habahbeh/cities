import React from 'react';
import { FaMoon } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { toggleMode } from '../../store/actions';

const ToggleMode = () => {
  const currentTheme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  return (
    <div
      className='toggle-mode'
      onClick={() => dispatch(toggleMode(currentTheme))}
    >
      <FaMoon className='toggle-mode-icon' />
      <span className='toggle-mode-text'>Dark Mode</span>
    </div>
  );
};

export default ToggleMode;
