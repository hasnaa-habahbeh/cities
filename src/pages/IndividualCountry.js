import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { filterByName } from '../store/actions';
import BackButton from '../components/shared/BackButton/BackButton';
import Spinner from '../components/shared/Spinner/Spinner';
import IndividualCountryContainer from '../components/IndividualCountry/IndividualCountryContainer/IndividualCountryContainer';

const IndividualCountry = () => {
  const { countryData } = useSelector((state) => state.individualCountryObject);
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filterByName(params.name, 'individual'));
  }, [params.name, dispatch]);

  return (
    <div className='space-from-edges'>
      <BackButton />
      {countryData?.name && countryData.name.common[0] === params.name[0] ? (
        <IndividualCountryContainer countryData={countryData} />
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default IndividualCountry;
