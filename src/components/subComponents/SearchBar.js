import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import CityContext from '../../contexts/CityContext.js';
import styled from 'styled-components';
import { getCityData, getCityArray } from '../../functions';

const Search = styled.input`
  width: 73.2rem;
  border: none;
  border-radius: 7px;
  padding: 2rem;
  font-size: 1.9rem;

  &:focus {
    outline: 0;
  }
`;

const Form = styled.form`
  width: 85%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

// const Button = styled.button`
//   border: 0px;
//   background: white;
//   width: 45px;
//   height: 30px;
//   background: #8bc34a;
//   color: white;
//   display: flex;
//   justify-content: center;
//   :hover {
//     border: 1px solid white;
//     cursor: pointer;
//   }
// `;

const CityDropDown = styled.div`
  z-index: 2;
  height: 0;
  width: 73.2rem;
`;

const City = styled.option`
  margin: 0;
  padding: 1rem;
  font-size: 1.9rem;
  background: #fff;
  &:hover {
    background: #bbd3fc;
    cursor: pointer;
  }

  &:last-child {
    border-bottom-right-radius: 7px;
    border-bottom-left-radius: 7px;
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
    <Form autoComplete='off' onSubmit={handleSubmit}>
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

      {/* <Button type='submit'>
        <SearchIcon />
      </Button> */}
      <CityDropDown>
        {cities.length === 0 && search !== '' && search.split('').length > 2 ? (
          <City>No Matches Found...</City>
        ) : (
          cities.splice(0, 4).map((city, idx) => (
            <City key={idx} onClick={() => handleCityClick(city)}>
              {city}
            </City>
          ))
        )}
      </CityDropDown>
    </Form>
  );
};

export default SearchBar;
