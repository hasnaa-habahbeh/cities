import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <div className='back-button' onClick={() => navigate(-1)}>
      <FaArrowLeft className='back-button-icon' />
      <span className='back-button-text'>Back</span>
    </div>
  );
};

export default BackButton;
