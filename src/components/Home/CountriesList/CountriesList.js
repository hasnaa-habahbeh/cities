import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAll } from '../../../store/actions';
import CountryCard from '../CountryCard/CountryCard';
import Spinner from '../../shared/Spinner/Spinner';

const CountriesList = () => {
  const { countries, loading } = useSelector((state) => state.countriesArray);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAll());
  }, [loading, dispatch]);

  return (
    <div className='countries-list space-from-edges'>
      {!loading && countries.length > 0 ? (
        <div className='countries-list-container'>
          {countries.map((country) => (
            <CountryCard key={country.name.common} country={country} />
          ))}
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default CountriesList;
