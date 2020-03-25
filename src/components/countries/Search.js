import React, { useState, useContext } from 'react';
import CountryContext from '../../context/country/countryContext';

const Search = () => {
  const countryContext = useContext(CountryContext);

  const [text, setText] = useState('');

  const onChange = event => {
    setText(event.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    countryContext.searchCountry(text);
    setText('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="seacrh country"
          value={text}
          onChange={onChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
    </div>
  );
};

export default Search;
