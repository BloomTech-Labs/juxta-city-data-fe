import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import CityContext from '../../contexts/CityContext.js';
import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';
import { getCityData, getCityArray } from '../../functions';

const Search = styled.input`
  width: 45vw;
  border: 1px solid #ddd;
  border-radius: 7px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  padding: 1.2rem;
  font-size: 1.2rem;

  &:focus {
    outline: solid #000;
  }

  @media (max-width: 500px) {
    width: 60vw;
  }
`;

const Button = styled.button`
  background: #0074cc;
  border: none;
  border-radius: 7px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  padding: 1.2rem 1rem;
  font-size: 1.2rem;
  color: #fff;
  cursor: pointer;

  &:focus {
    outline: solid #000;
  }
`;

const CityDropDown = styled.div`
  z-index: 2;
  height: 0;
  display: flex;
  flex-direction: column;
`;

const City = styled.p`
  margin: 0;
  width: 45vw;
  padding: 0.5rem 1.2rem;
  font-size: 1.2rem;
  background: #fff;

  &:hover {
    background: #bbd3fc;
    cursor: pointer;
  }

  &:focus {
    outline: solid #000;
  }

  &:last-child {
    border-bottom-right-radius: 7px;
    border-bottom-left-radius: 7px;
  }

  @media (max-width: 500px) {
    width: 60vw;
  }
`;

const searchBorderRadius = {
  borderBottomLeftRadius: '0px',
  borderBottomRightRadius: '0px'
};

const SearchBar = () => {
  const [search, setSearch] = useState('');
  const [cities, setCities] = useState([]);
  const { setCityData } = useContext(CityContext);
  let history = useHistory();
  useEffect(() => {
    if (search.length < 3 || undefined) {
      setCities([]);
    } else {
      getCityArray(search).then((res) => setCities(res));
    }
  }, [search]);
  const handleSubmit = (e) => {
    e.preventDefault();
    getCityData(search).then((res) => {
      setCityData(res);
      localStorage.setItem('cityName', res.city);
      history.push('/cityview');
    });
  };
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const handleCityClick = (city) => {
    setSearch(city);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div role='search'>
        <Search
          type='search'
          name='city'
          value={search}
          placeholder='Search for a city'
          onChange={handleChange}
          aria-label='Search for a city'
          results='5'
          style={search ? searchBorderRadius : null}
        />
        <Button type='submit'>
          <Icon name='search' />
          Search
        </Button>
        <CityDropDown>
          {cities.length === 0 &&
          search !== '' &&
          search.split('').length > 2 ? (
            <City>No Matches Found...</City>
          ) : (
            cities.splice(0, 4).map((city, idx) => (
              <City key={idx} onClick={() => handleCityClick(city)}>
                {city}
              </City>
            ))
          )}
        </CityDropDown>
      </div>
    </form>
  );
};

export default SearchBar;
