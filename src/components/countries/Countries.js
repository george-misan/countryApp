import React, { Fragment, useState, useEffect } from 'react';
import Spinner from '../layout/Spinner';
import Search from '../../components/countries/Search';
import CountryContext from '../../context/country/countryContext';
import { useContext } from 'react';

import CountryItem from './CountryItem';

const Countries = () => {
  const [sortConfig, setSortConfig] = useState({ key: '', direction: '' });
  const countriesContext = useContext(CountryContext);

  useEffect(() => {
    countriesContext.getCountries();
  }, []);

  const { countries, loading } = countriesContext;

  React.useMemo(() => {
    let sortedCountries = [...countries];
    if (sortConfig.key != null) {
      sortedCountries.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        return 0;
      });
    }
    return sortedCountries;
  }, [countries, sortConfig]);

  /* const requestSort = key => {
  let direction = 'ascending';
  if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
    direction = 'descending'
  }
  setSortConfig({key, direction})
}, [] */

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
              <th>
                <button
                  type="btn"
                  onClick={() => setSortConfig({ key: 'flag' })}
                >
                  Flag
                </button>
              </th>
              <th>
                {' '}
                <button
                  type="btn"
                  onClick={() => setSortConfig({ key: 'AlphaCode' })}
                >
                  Alpha Code
                </button>
              </th>
              <th>Name</th>
              <th>Capital</th>
              <th>Region</th>
              <th>Language</th>
              <th>Population</th>
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
