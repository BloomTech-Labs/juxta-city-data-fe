import React from 'react';
import axios from 'axios';
import { render, fireEvent, screen } from '@testing-library/react';
import CityContext from '../../../contexts/CityContext';
import SearchBar from '../SearchBar';


jest.mock('axios', () => ({
  get: jest.fn()
}));

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

it('displays a list of matching cities when characters are input', async () => {
  let cityData = '';
  const setCityData = data => cityData = data;

  axios.get.mockResolvedValueOnce({
    data: [
    "Seaford, New York",
    "Seaside, Oregon",
    "Seabrook, Texas",
    "Seagoville, Texas",
    "Sealy, Texas",
    "SeaTac, Washington",
    "Seattle Hill Silver Firs, Washington",
    "Seattle, Washington",
    "Seabrook, New Hampshire",
    "Seabrook, Maryland",
    "Seal Beach, California",
    "Seaside, California",
    "Searcy, Arkansas"
  ]})

  const { getByPlaceholderText, getByDisplayValue } = render(
    <CityContext.Provider value={{cityData, setCityData}}>
      <SearchBar />
    </CityContext.Provider>
  );

  let searchBar = getByPlaceholderText(/search for a city/i);

  fireEvent.change(searchBar, { target: { value: 's' } });
  expect(axios.get).toHaveBeenCalledTimes(0);

  fireEvent.change(searchBar, { target: { value: 'se' } });
  expect(axios.get).toHaveBeenCalledTimes(0);

  fireEvent.change(searchBar, { target: { value: 'sea' } });


  searchBar = await screen.getByDisplayValue(/sea/i); 
  console.log('searchBar:' , searchBar.value);

  expect(axios.get).toHaveBeenCalledTimes(1);
  // TODOs:
  // - Figure out how to pass this assertion
  // - Add assertions for dropdown display 

});
