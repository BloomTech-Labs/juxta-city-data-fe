import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CityContext from '../../../contexts/CityContext';
import SearchBar from '../SearchBar';


jest.mock('axios', () => ({ get: jest.fn() }));
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: jest.fn()
  })
}));

it('renders the search form', () => {
  let cityData = '';
  const setCityData = data => cityData = data;

  const { getByPlaceholderText } = render(
  <CityContext.Provider value={{cityData, setCityData}}>
    <SearchBar />
  </CityContext.Provider>
  );
  expect(getByPlaceholderText(/search for a city/i)).toBeInTheDocument();
});
