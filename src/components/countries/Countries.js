import React, { useState, useEffect } from 'react';
import Spinner from '../layout/Spinner';
import CountryContext from '../../context/country/countryContext';
import { useContext } from 'react';

import CountryItem from './CountryItem';

const Countries = () => {
  const countriesContext = useContext(CountryContext);

  useEffect(() => {
    countriesContext.getCountries();
  }, []);

  const { countries, loading } = countriesContext;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <table>
        <caption>List of countries in the world</caption>
        <thead>
          <tr>
            <th>AlphaCode</th>
            <th>Name</th>
            <th>Capital</th>
            <th>population</th>
          </tr>
        </thead>
        {countries.map(country => (
          <CountryItem key={country.name} country={country} />
        ))}
      </table>
    );
  }
};

export default Countries;
