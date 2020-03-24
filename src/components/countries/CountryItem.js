import React from 'react';
import { Link } from 'react-router-dom';

const CountryItem = ({
  country: { alpha2Code, name, languages, region, population }
}) => {
  return (
    <tbody>
      <tr>
        <td>{alpha2Code}</td>
        <td>
          {' '}
          <Link to={`/country/${name}`}>{name}</Link>
        </td>
        <td>{region}</td>
        <td>{population}</td>
      </tr>
    </tbody>
  );
};

const flagStyle = {
  width: '20px',
  borderRadius: '2px'
};

export default CountryItem;
