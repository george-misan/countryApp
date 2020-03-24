import React, { Fragment, useEffect, useContext } from 'react';
import CountryContext from '../../context/country/countryContext';

const Country = ({ match }) => {
  const countryContext = useContext(CountryContext);
  const { country, getCountry } = countryContext;

  useEffect(() => {
    getCountry(match.params.name);
  }, []);

  const { name, capital, population, area } = country;

  console.log('capital', capital);
  return (
    <Fragment>
      <h1>{name}</h1>
      <ul>
        <li>{capital}</li>
        <li>{population}</li>
        <li>{area}</li>
      </ul>
    </Fragment>
  );
};

export default Country;
