import React from 'react';
import { Link } from 'react-router-dom';

const CountryItem = ({
  country: { flag, alpha2Code, name, capital, languages, region, population }
}) => {
  return (
    <tbody>
      <tr>
        <td>
          <img src={flag} alt="country flag" style={{ width: '50px' }} />
        </td>
        <td>{alpha2Code}</td>
        <td>
          {' '}
          <Link to={`/country/${name}`}>{name}</Link>
        </td>
        <td>{capital}</td>
        <td>{region}</td>
        <td>
          {languages.map(lang => (
            <li>{lang.name}</li>
          ))}
        </td>
        <td>{population}</td>
        <td>
          <input type="submit" value="Add" className="btn btn-light" />
        </td>
      </tr>
    </tbody>
  );
};

const flagStyle = {
  width: '20px',
  borderRadius: '2px'
};

export default CountryItem;
