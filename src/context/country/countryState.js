import React, { useReducer } from 'react';
import axios from 'axios';
import CountryContext from './countryContext';
import CountryReducer from './countryReducer';
import {
  SEARCH_COUNTRIES,
  SET_LOADING,
  CLEAR_COUNTRIES,
  GET_COUNTRIES,
  GET_COUNTRY
} from '../types';

const CountryState = props => {
  const initialState = {
    countries: [],
    country: {},
    loading: true
  };

  const [state, dispatch] = useReducer(CountryReducer, initialState);

  // Get Country
  const getCountries = async () => {
    setLoading();

    const res = await axios.get('https://restcountries.eu/rest/v2/all');

    dispatch({
      type: GET_COUNTRIES,
      payload: res.data
    });
  };

  const getCountry = async name => {
    const res = await axios.get(
      `https://restcountries.eu/rest/v2/name/${name}`
    );

    dispatch({
      type: GET_COUNTRY,
      payload: res.data
    });
  };

  const setLoading = () => dispatch({ type: SET_LOADING });
  return (
    <CountryContext.Provider
      value={{
        countries: state.countries,
        country: state.country,
        loading: state.loading,
        getCountries,
        getCountry
      }}
    >
      {props.children}
    </CountryContext.Provider>
  );
};

export default CountryState;
