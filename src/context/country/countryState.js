import React from 'react';
import axios from 'axios';
import CountryContext from './countryContext';
import CountryReducer from './countryReducer';
import { GET_COUNTRIES } from '../types';
import {
    SEARCH_COUNTRIES,
    SET_LOADING,
    CLEAR_COUNTRIES,
    GET_COUNTRIES,
    GET_COUNTRY
} from '../types';


const CountryState = props => {
    const initialState = {
        country: [],
        countries: {},
        loading: false
    };

    const [state, dispatch] = useReducer(CountryReducer, initialState);

    // Get Country
    const getUser = async => {
        setLoading();

        const res = await axios.get('https://restcountries.eu/rest/v2/all');
        const m = await res.json()

        dispatch({
            type: GET_COUNTRIES,
            payload: m
        });
    };

    const setLoading = () => dispatch({ type: SET_LOADING });

    return (
        <GithubContext.Provider
        value={{
            country : state.country,
            countries: state.countries,
            loading: state.loading,
        }}
        >
            {props.children}
        </GithubContext.Provider>
    )
};

export default GithubStatae;


