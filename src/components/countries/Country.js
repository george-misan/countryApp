import React, { Fragment, useEffect, useContext, Component } from 'react';
import Spinner from '../layout/Spinner';
import CountryContext from '../../context/country/countryContext';

const Country = ({ match }) => {
  const countryContext = useContext(CountryContext);
  const { country, getCountry, loading } = countryContext;

  useEffect(() => {
    getCountry(match.params.name);
  }, []);

  if (loading) {
    console.log('before loading', country);
    return <Spinner />;
  } else if (!loading) {
    console.log('after loading', country);
    for (let elements of country) {
      const { name, population, region, capital } = elements;

      return (
        <Fragment>
          <h1>{name}</h1>
        </Fragment>
      );
    }
  }
};

export default Country;
