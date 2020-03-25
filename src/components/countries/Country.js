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
      const {
        name,
        population,
        region,
        capital,
        languages,
        borders,
        translations,
        currencies,
        altSpellings,
        flag,
        regionalBlocs
      } = elements;

      return (
        <Fragment>
          <div>
            <img className="img" src={flag} style={{ width: '5rem' }}></img>
          </div>
          <h1>{name}</h1>
          <h2>Population: {population}</h2>
          <h3>Region: {region}</h3>
          <h3>Capital: {capital}</h3>
          <div>
            <h3>Languages</h3>
            {languages.map(lang => (
              <ul>
                <li key={lang.name}>Name: {lang.name}</li>
                <li key={lang.nativeName}>Native Name: {lang.nativeName}</li>
              </ul>
            ))}
          </div>
          <div>
            <h3>Borders</h3>
            {borders.map(nation => (
              <p key={nation}>{nation}</p>
            ))}
          </div>
          <div>
            <h3>Translation</h3>
            {Object.keys(translations).map(key => (
              <p>
                {key} : {translations[key]}
              </p>
            ))}
          </div>
          <div>
            <h3>Currency</h3>
            {currencies.map(n => (
              <p>{n.name}</p>
            ))}
          </div>
          <div>
            <h3>Alternative Spelling</h3>
            {altSpellings.map(n => (
              <p>{n}</p>
            ))}
          </div>
          <div>
            <h3>Regional Blocks</h3>
            {regionalBlocs.map(n => (
              <ol>
                <li>ACRONYMS: {n.acronyms}</li>
                <li>NAME: {n.name}</li>
                <li>
                  OTHER ACRONYMS:{' '}
                  {n.otherAcronyms.map(acronym => (
                    <li>{acronym}</li>
                  ))}
                </li>
                <li>
                  OTHER NAMES:{' '}
                  {n.otherNames.map(name => (
                    <li>{name}</li>
                  ))}
                </li>
              </ol>
            ))}
          </div>
        </Fragment>
      );
    }
  }
};

export default Country;
