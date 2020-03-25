import React, { Fragment, useState, useEffect } from 'react';
import Spinner from '../layout/Spinner';
import Search from '../../components/countries/Search';
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
      <Fragment>
        <Search />
        <table>
          <caption>List of countries in the world</caption>
          <thead>
            <tr>
              <th>Flag</th>
              <th>AlphaCode</th>
              <th>Name</th>
              <th>Capital</th>
              <th>Languages</th>
              <th>population</th>
            </tr>
          </thead>
          {countries.map(country => (
            <CountryItem key={country.name} country={country} />
          ))}
        </table>
      </Fragment>
    );
  }
};

export default Countries;
