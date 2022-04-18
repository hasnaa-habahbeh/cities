import React from 'react';
import Filters from '../components/Home/Filters/Filters';
import CountriesList from '../components/Home/CountriesList/CountriesList';

const Home = () => (
  <div className='home'>
    <Filters />
    <CountriesList />
  </div>
);

export default Home;
